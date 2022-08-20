import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const themeDef = {
  colors: {
    primary: {
      main: blue[300],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
};

type ThemeDef = typeof themeDef;

declare module '@mui/material/styles' {
  interface Theme extends ThemeDef {}
  interface ThemeOptions extends Theme {}
}

export default createTheme(themeDef);
