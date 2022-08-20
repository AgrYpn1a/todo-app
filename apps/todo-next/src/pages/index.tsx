import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, CircularProgress, Typography } from '@mui/material';
import SignIn from '@c/SingIn';
import useAuth from '@lib/hooks/useAuth';

const Home = () => {
  const { loading, auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading, auth]);

  useEffect(() => {
    if (auth) {
      router.push('/todo');
    }

    /**
     * Exlude deps:
     *  [router]
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return loading || auth ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress color="primary" />
    </Box>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1.5rem 0',
        }}
      >
        <Typography variant="h6">Welcome to</Typography>
        <br />
        <br />
        <Image
          src={'/static/img/logo.png'}
          width={40}
          height={40}
          alt="To Do App logo"
          style={{
            marginRight: '0.5rem',
          }}
        />
        <Typography variant="h4" noWrap component="div">
          <span style={{ fontWeight: 600 }}>To Do</span> app
        </Typography>
      </Box>
      <Box
        style={{
          margin: '1rem 0',
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: 400,
          }}
        >
          Please Sign in to continue
        </Typography>
      </Box>
      <Box>
        <SignIn />
      </Box>
    </Box>
  );
};

export default Home;
