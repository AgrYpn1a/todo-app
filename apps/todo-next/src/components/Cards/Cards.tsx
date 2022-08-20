import React, { FC, useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Masonry } from '@mui/lab';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

const heights = [
  180, 90, 130, 170, 110, 150, 330, 180, 150, 190, 200, 350, 230, 90, 80,
];

const CARD_WIDTH = 250;

const Card: FC<{ height: number; children: JSX.Element }> = ({
  height,
  children,
}) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      console.log('hover');
    }
  }, [hover]);
  return (
    <Paper
      variant={'outlined'}
      sx={{
        height,
        boxShadow: hover ? 3 : 0,
        padding: '0.5rem',
        textAlign: 'center',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Paper>
  );
};

const Cards: FC<{ sidebarWidth: number }> = ({ sidebarWidth }) => {
  const [columns, setColumns] = useState(5);
  const { width, ref } = useResizeDetector();

  /** Handle bounding box resize & update columns */
  useEffect(() => {
    if (!width) {
      return;
    }

    setColumns(Math.floor(width / CARD_WIDTH));

    /**
     * Excluding deps:
     *  [columns]
     * because of infnite re-render.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, sidebarWidth]);

  return (
    <>
      <Box
        ref={ref}
        sx={{
          width: {
            xl: `calc(1250px - ${sidebarWidth}px)`,
            lg: `calc(1000px - ${sidebarWidth}px)`,
            md: `calc(750px - ${sidebarWidth}px)`,
            sm: `calc(500px - ${sidebarWidth}px)`,
            xs: '250px',
          },
          margin: '0 auto',
        }}
      >
        <Masonry columns={columns} spacing={1} sx={{ width: '100%' }}>
          {heights.map((height, index) => (
            <Card key={index} height={height}>
              <>{index + 1}</>
            </Card>
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default Cards;
