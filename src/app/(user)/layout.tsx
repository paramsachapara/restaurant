"use client";
import React, { ReactNode } from "react";
import Header from "../components/Header";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <Box
        // component="main"
        sx={{
          //   flexGrow: 1,
          backgroundImage: "none", // Customize background if needed
          backgroundColor: "black", // Default background
          //   display: "flex",
          //   flexDirection: "column",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>

      {/* Footer (hidden on mobile) */}
      {/* <Box
        component="footer"
        sx={{
          display: { xs: "none", md: "block" }, // Hide on small screens
        }}
      >
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Layout;
