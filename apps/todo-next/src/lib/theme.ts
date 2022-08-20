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
  export interface Theme extends ThemeDef {}
  export interface ThemeOptions extends Theme {}
}

export default createTheme(themeDef);
