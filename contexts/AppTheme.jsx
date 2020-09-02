import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui';

const AppTheme = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c0f',
        contrastText: '#000'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default AppTheme;