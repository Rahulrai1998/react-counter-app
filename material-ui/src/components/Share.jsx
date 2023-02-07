import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function Share() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "80%", margin: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          margin: "auto",
        }}
        color="primary"
      >
        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: "64px", height: "48px" }}>
          <Tooltip title="Delete">
            <IconButton>
              <FacebookRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)} sx={{ color: "inherit" }}>
            Refer
          </span>
          <Drawer
            PaperProps={{
              style: {
                width: "540px",
                height: "80px",
                margin: "auto",
                borderRadius: "8px 8px 0 0",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
