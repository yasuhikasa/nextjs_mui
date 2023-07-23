import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import { Box } from '@mui/material';
import styles from '../../styles/components/layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string; // 追加: ページごとのタイトル
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Header title={pageTitle} />
      <Box className={styles.layout}>
        <Box className={styles.sidebar}>
          <Sidebar />
        </Box>
        <Box className={styles.mainContent}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
