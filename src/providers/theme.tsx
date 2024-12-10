import { createTheme } from '@mui/material/styles';

// Define your neutral theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#ffffff', // White
    },
    background: {
      default: '#f0f0f0', // Light gray for a soft background
      paper: '#ffffff', // White for paper components
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#4f4f4f', // Dark gray text for secondary elements
    },
    divider: '#e0e0e0', // Light gray for dividers
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      color: '#000000', // Ensure default text is black
    },
    body2: {
      color: '#4f4f4f', // Slightly lighter gray for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Subtle rounded corners
          textTransform: 'none', // Disable uppercase for buttons
          color: '#ffffff', // White text for buttons
        },
      },
    },
  },
});

export default theme;
