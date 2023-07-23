import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import styles from '../../styles/components/sidebar.module.css';

const Sidebar = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
    <List>
      <ListItem>
        <ListItemButton href='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="ホーム" />
        </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton href='/users'>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="ユーザー管理" />
          </ListItemButton>
        </ListItem>
    </List>
    </Box>
  );
};

export default Sidebar;
