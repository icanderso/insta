"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/providers/theme'; // Import the theme you created

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      {children}
    </MuiThemeProvider>
  );
}
