"use client";

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Define Material-UI theme
const theme = createTheme({
  palette: {
    mode: "light", // Default to light mode; adjust dynamically if needed
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#171717",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: `"Myriad Pro", "Oswald", "Geist Sans", "Geist Mono", sans-serif`,
    h1: {
      fontFamily: `"Oswald", sans-serif`,
      fontWeight: 700,
    },
    body1: {
      fontFamily: `"Myriad Pro", sans-serif`,
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0a0a", // Black background
          color: "#ededed", // White text
          //   fontFamily: `"Myriad Pro", sans-serif`, // Myriad font
          //   padding: "16px", // Add some default padding
          //   borderRadius: "8px", // Rounded corners
        },
      },
    },
  },
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
