import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PIC from "./PIC.jpg"

const GroupItem = () => {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          height: 233,

          maxHeight: { xs: 233, md: 90 },
          maxWidth: { xs: 350, md: 250 },
          float: "left",
          display: "inline",
          backgroundColor: "red",
        }}
        alt="The house from the offer."
        src={PIC}
      />

      <Typography
        sx={{
          display: "inline",
          backgroundColor: "",
          float: "left",
          marginLeft: "20px",
          fontSize: "1.5rem",
          color: "#078ff7",
        }}
      >
        Group One
      </Typography>
      <Button variant="contained" aria-label="outlined primary button group" sx={{float:"right",width:"20%"}}>
       Join
      </Button>
    </Box>
  );
};

export default GroupItem;