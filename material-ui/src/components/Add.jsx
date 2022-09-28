import { Fab, IconButton, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";

const Add = () => {

    const [open , setOpen] = useState(false);
  return (
    <>
      <Tooltip
      onClick={e=>setOpen(true)}
        title="Delete"
        sx={{ position: "fixed", bottom: 30, left: { xs: "45%", sm: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      
      <Modal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
            Hello
        </Box>
      </Modal>
    </>
  );
};
export default Add;
