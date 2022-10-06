import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import GroupItem from "./GroupItems";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Groups = () => {
  return (
    <Box flex={6} p={3}>
        <Typography variant="h5" sx={{padding:"10px"}}>All Groups</Typography>
      <Stack spacing={2}>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
        <Item><GroupItem/></Item>
      </Stack>
    </Box>
  );
};

export default Groups;
