import * as React from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledTest = styled('div')(({ theme }) => ({
  color: theme.colors.primary.main,
  fontWeight: 400,
}));

const Home: NextPage = () => {
  return (
    <div>
      <StyledTest>Hello Next App</StyledTest>
      <Button variant="contained">Test Button</Button>
    </div>
  );
};

export default Home;
