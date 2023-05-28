import {
  AccountBox,
  Article,
  DarkMode,
  Groups,
  Home,
  People,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";

// const myStyles = makeStyles((theme)=>({

//   link:{
//     textDecoration:"none",
//     color: theme.palette.text.primary
//   }

// }))

const Sidebar = ({ mode, setMode }) => {
  // const classes = myStyles();

  const mycolor = mode === "dark" ? "#fff" : theme.palette.text.primary;
  return (
    <Box flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <Link to="/" style={{ color: mycolor, textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton component="a">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary="Homepage"
                  sx={{ color: "theme.default" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/Pages" style={{ color: mycolor, textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/Groups" style={{ color: mycolor, textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/Marketplace"
            style={{ color: mycolor, textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/Friends"
            style={{ color: mycolor, textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/Setting"
            style={{ color: mycolor, textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/Profile"
            style={{ color: mycolor, textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
