import * as React from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div>
      <div>Hello Next App</div>
      <Button variant="contained">Test Button</Button>
    </div>
  );
};

export default Home;
