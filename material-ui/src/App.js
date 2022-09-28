import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { style } from "@mui/system";
import Add from "./components/Add";
// import AddIcon from '@mui/icons-material/Add';

import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import PrimarySearchAppBar from "./components/nav";

function App() {

  return (
    <Box>
      <Navbar/>
      {/* <PrimarySearchAppBar/> */}
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
