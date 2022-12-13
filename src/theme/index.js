import { CssBaseline } from '@mui/material';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import palette from './palette';



export default function MuiTheme({ children }) {

  const theme = createTheme({
    palette: palette.dark
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        {children}
    </ThemeProvider>
  );
}
