import { ExpandMore, MoreVert , FavoriteIcon , ShareIcon, Favorite, Share, CheckBox, FavoriteBorder} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={6} p={3}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    
    </Box>
  );
};

export default Feed;
