import { createTheme , ThemeProvider } from '@mui/material/styles';
export default function MuiTheme({ children }) {

  const theme = createTheme({
    palette: {
        primary: {
          main: "#121212",
        }
      },
  });

  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}
