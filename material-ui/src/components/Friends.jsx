import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const Friends = () => {
    return ( <Box flex={6} p={3}>

<Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </Box> );
}
 
export default Friends;