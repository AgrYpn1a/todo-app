import * as React from 'react';
import Sidebar from '../components/Sidebar';
import { styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Cards from '../components/Cards';
import { useState } from 'react';
import { drawerWidth } from '../components/Sidebar/Sidebar';
import AppBar from '../components/AppBar';
import useAuth from 'src/lib/hooks/useAuth';
import { useEffect } from 'react';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 2,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const HeaderOffset = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Todo = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('auth = ', auth);
  }, [auth]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Sidebar isOpen={open} />
        <Main open={open}>
          <HeaderOffset />
          <Cards sidebarWidth={open ? drawerWidth : 0} />
        </Main>
      </Box>
    </>
  );
};

export default Todo;
