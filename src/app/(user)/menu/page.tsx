"use client";
import Menu1 from "../../../assets/menu/1.jpg";
import Menu2 from "../../../assets/menu/2.jpg";
import Menu3 from "../../../assets/menu/3.jpg";
import Menu4 from "../../../assets/menu/4.jpg";
import Menu5 from "../../../assets/menu/5.jpg";
import Menu6 from "../../../assets/menu/6.jpg";
import Menu7 from "../../../assets/menu/7.jpg";
import Menu8 from "../../../assets/menu/8.jpg";
import Menu9 from "../../../assets/menu/9.jpg";
import Menu10 from "../../../assets/menu/10.jpg";
import Menu11 from "../../../assets/menu/11.jpg";
import Menu12 from "../../../assets/menu/12.jpg";
import Menu13 from "../../../assets/menu/13.jpg";
import Menu14 from "../../../assets/menu/14.jpg";
import Menu15 from "../../../assets/menu/15.jpg";
import Menu16 from "../../../assets/menu/16.jpg";
import Menu17 from "../../../assets/menu/17.jpg";
import Menu18 from "../../../assets/menu/18.jpg";
import Menu19 from "../../../assets/menu/19.jpg";
import Menu20 from "../../../assets/menu/20.jpg";
import { Box, Button, Grid2, IconButton } from "@mui/material";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const allImages = [
  { src: Menu1, id: "happy-lunch" },
  { src: Menu2, id: "" },
  { src: Menu3, id: "vorspeise" },
  { src: Menu4, id: "" },
  { src: Menu5, id: "temaki" },
  { src: Menu6, id: "sushi-set" },
  { src: Menu7, id: "veggie-set" },
  { src: Menu8, id: "veggie-futo-maki" },
  { src: Menu9, id: "sashimi" },
  { src: Menu10, id: "nigiri" },
  { src: Menu11, id: "" },
  { src: Menu12, id: "crunchy-sushi" },
  { src: Menu13, id: "wakami-maki" },
  { src: Menu14, id: "veggie-maki" },
  { src: Menu15, id: "inside-out" },
  { src: Menu16, id: "special-role" },
  { src: Menu17, id: "udon-bowl" }, // Add specific id if needed
  { src: Menu18, id: "dessert" }, // Add specific id if needed
  { src: Menu19, id: "" }, // Add specific id if needed
  { src: Menu20, id: "" }, // Add specific id if needed
];

// Menu categories
const categories = [
  { id: "happy-lunch", label: "Happy Lunch" },
  { id: "vorspeise", label: "Vorspeise" },
  { id: "temaki", label: "Temaki" },
  { id: "sushi-set", label: "Sushi Set" },
  { id: "veggie-set", label: "Veggie Set" },
  { id: "veggie-futo-maki", label: "Veggie & Futo Maki" },
  { id: "sashimi", label: "Sashimi" },
  { id: "nigiri", label: "Nigiri" },
  { id: "crunchy-sushi", label: "Crunchy Sushi" },
  { id: "wakami-maki", label: "Wakami Maki" },
  { id: "veggie-maki", label: "Veggie Maki" },
  { id: "inside-out", label: "I.O. Inside Out" },
  { id: "special-role", label: "Wakame Special Role" },
  { id: "udon-bowl", label: "Udone Donburi Bowl" },
  { id: "dessert", label: "Dessert" },
];

const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Menu = () => {
  return (
    <Box>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        {categories.map((category) => (
          <Grid2
            key={category.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              onClick={() => handleScroll(category.id)}
              sx={{
                color: "white",
                fontSize: "0.9rem",
                textTransform: "capitalize",
                padding: "6px 12px",
                border: "1px solid white",
                background: "rgba(0, 0, 0, 0.7)",
                borderRadius: "4px",
              }}
            >
              {category.label}
            </Button>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 3 }}
      >
        {allImages?.map((item, index) => (
          <Box key={index} id={item.id}>
            <Image key={index} src={item.src} alt={`i-${index}`} />
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "gray", // Dynamic color
          color: "white", // Icon color
          "&:hover": {
            backgroundColor: "gray", // Optional hover effect
          },
        }}
      >
        <ArrowUpwardIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Menu;
