import { SportsVolleyball, Mail, Notifications } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Share from "./Share";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "45%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor:"white"
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          GOSSIP
        </Typography>
        <SportsVolleyball
          sx={{ display: { xs: "block", sm: "none" }, fontSize: 30 }}
        />
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail cursor="pointer" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications cursor="pointer" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography
            variant="span"
            sx={{ fontWeight: "300", fontSize: "15px" }}
          >
            Blue Star
          </Typography>
          <Typography
            variant="span"
            sx={{ fontWeight: "300", fontSize: "15px" }}
          >
            Blue Star
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>
          <Share />
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
