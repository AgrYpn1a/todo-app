import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from 'src/lib/hooks/useAuth';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  return (
    <div>
      <LoadingButton
        onClick={handleSignInWithGoogle}
        variant="outlined"
        startIcon={<GoogleIcon />}
        style={{
          padding: '0.5rem 2rem',
        }}
        loading={loading}
        loadingPosition="start"
      >
        Sign In With Google
      </LoadingButton>
    </div>
  );
};

export default SignIn;
