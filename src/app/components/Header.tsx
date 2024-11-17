"use client"; // Client Component
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // State for opening and closing the drawer
  const router = useRouter();

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const menuItems = ["MENU", "ABOUT", "RESERVATION"]; // Navigation menu items

  return (
    <>
      <AppBar position="static" sx={{ background: "black", color: "white" }}>
        <Toolbar className="flex justify-between p-4">
          {/* Left Section */}
          <Box display="flex" alignItems="center" gap={2}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block", cursor: "pointer" } }}
            >
              LOGO
            </Typography>
          </Box>

          {/* Right Section for Desktop */}
          <Box
            display="flex"
            gap={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item, index) => (
              <Typography key={index} variant="h6" sx={{ cursor: "pointer" }}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* Hamburger Icon for Mobile */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "space-between",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              LOGO
            </Typography>
            <IconButton onClick={() => toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="top" open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{ width: "100%", background: "black", color: "white" }}
          role="presentation"
        >
          <List>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-end", // Aligns content to the right
              }}
            >
              <ListItemIcon
                sx={{ minWidth: 0 }}
                onClick={() => toggleDrawer(false)}
              >
                <CloseIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItem>
            {/* {menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  sx={{ alignItems: "center" }}
                  primary={item}
                  primaryTypographyProps={{
                    sx: { textAlign: "center" },
                  }}
                />
              </ListItem>
            ))} */}
            <ListItem>
              <ListItemText
                sx={{ alignItems: "center" }}
                primary="MENU"
                primaryTypographyProps={{
                  sx: { textAlign: "center" },
                }}
              />
            </ListItem>
            <ListItem component="div" onClick={() => console.log(" ------  ")}>
              <ListItemButton
                sx={{ alignItems: "center" }}
                primary="ABOUT"
                primaryTypographyProps={{
                  sx: { textAlign: "center" },
                }}
                // onClick={() => router.push("/about")}
                onClick={() => console.log(" item ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{ alignItems: "center" }}
                primary="RESERVATION"
                primaryTypographyProps={{
                  sx: { textAlign: "center" },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;