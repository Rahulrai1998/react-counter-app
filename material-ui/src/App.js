import logo from "./logo.svg";
import "./App.css";
import { Box, Button, createTheme, Stack, styled, ThemeProvider, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { style } from "@mui/system";
import Add from "./components/Add";
// import AddIcon from '@mui/icons-material/Add';

import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import PrimarySearchAppBar from "./components/nav";
import { useState } from "react";

function App() {

  const [mode , setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      {/* <PrimarySearchAppBar/> */}
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Sidebar  mode={mode} setMode={setMode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
