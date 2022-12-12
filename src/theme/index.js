import { createTheme , ThemeProvider } from '@mui/material/styles';
import palette from './palette';



export default function MuiTheme({ children }) {
  const theme = createTheme({
    palette: palette.light,
  });
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}
