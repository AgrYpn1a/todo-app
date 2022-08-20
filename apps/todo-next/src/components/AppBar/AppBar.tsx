import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from 'src/lib/hooks/useAuth';

interface AppBarWrapperProps extends MuiAppBarProps {
  open?: boolean;
}

interface AppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const AppBarWrapper = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarWrapperProps>(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const AppBar: FC<AppBarProps> = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  return (
    <AppBarWrapper position="fixed" open={open}>
      <Toolbar>
        {open ? (
          <IconButton
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Image
          src={'/static/img/logo.png'}
          width={40}
          height={40}
          alt="To Do App logo"
          style={{
            marginRight: '0.5rem',
          }}
        />
        <Typography variant="h6" noWrap component="div">
          <span style={{ fontWeight: 600 }}>To Do</span> app
        </Typography>
      </Toolbar>
    </AppBarWrapper>
  );
};

export default AppBar;
