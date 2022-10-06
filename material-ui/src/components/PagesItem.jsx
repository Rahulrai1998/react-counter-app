import { Box, Button, Typography } from "@mui/material";
import React from "react";

const PagesItem = () => {
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
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
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
        Page One
      </Typography>
      <Button variant="contained" aria-label="outlined primary button group" sx={{float:"right",width:"20%"}}>
        Follow
      </Button>
    </Box>
  );
};

export default PagesItem;
