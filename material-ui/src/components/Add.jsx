import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{ position: "fixed", bottom: 30, left: { xs: "45%", sm: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <MyModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30, cursor: "pointer" }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography fontWeight={500} variant="span">
              Blue Star
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's in your mind..."
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="primary" />
            <VideoCameraBack color="primary" />
            <PersonAdd color="primary" />
          </Stack>
          <Box sx={{display:"flex" }}>
            <ButtonGroup
              sx={{ marginTop: "10px", width: "50%" }}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button sx={{ width: "100%" }}>Post</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </MyModal>
    </>
  );
};
export default Add;
