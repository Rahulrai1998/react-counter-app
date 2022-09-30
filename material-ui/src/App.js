import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  createTheme,
  Stack,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { style } from "@mui/system";
import Add from "./components/Add";
// import AddIcon from '@mui/icons-material/Add';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import PrimarySearchAppBar from "./components/nav";
import { useState } from "react";
import Pages from "./components/Pages";
import Marketplace from "./components/Marketplace";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Groups from "./components/Groups";
import Setting from "./components/Setting";
const x = 10

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        {/* <PrimarySearchAppBar/> */}
        <Stack direction="row" spacing={5} justifyContent="space-between">
          
          
        <Router>
            <Sidebar mode={mode} setMode={setMode} />

            <Routes>
              <Route exact path="/" element={<Feed />}></Route>
              <Route exact path="/Pages" element={<Pages />}>

              </Route>
              <Route exact path="/Groups" element={<Groups />}></Route>
              <Route exact path="/Marketplace" element={<Marketplace />}></Route>
              <Route exact path="/Friends" element={<Friends />}></Route>
              <Route exact path="/Setting" element={<Setting />}></Route>
              <Route exact path="/Profile" element={<Profile />}></Route>
            </Routes> 
          </Router>

          

          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
   
  );
}

export default App;
