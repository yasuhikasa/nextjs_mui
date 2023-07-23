import React from 'react';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import styles from '../../styles/components/header.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar className={styles.headerTool}>
          <Box className={styles.logo}>
            <Image src="/logo_04.png" alt="Logo" width={50} height={50} />
          </Box>
          <Box className={styles.centerContainer}>
            <Typography variant="h6" className={styles.companyName}>
              {title}
            </Typography>
          </Box>
          <Box className={styles.rightContainer}>
            <Typography variant="h6" className={styles.username}>
              Username
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
