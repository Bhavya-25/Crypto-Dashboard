import { CssBaseline } from '@mui/material';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import palette from './palette';
import breakpoints from './breakpoints';



export default function MuiTheme({ children }) {

  const theme = createTheme({
    palette: palette.dark,
    breakpoints: breakpoints
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        {children}
    </ThemeProvider>
  );
}
