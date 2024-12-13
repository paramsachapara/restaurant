"use client"; // Client-side component
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
// DESSERT
import Dessert1 from "../../../assets/img/Wakame-PNG/DESSERT/129.png";
import Dessert2 from "../../../assets/img/Wakame-PNG/DESSERT/130.png";
import Dessert3 from "../../../assets/img/Wakame-PNG/DESSERT/131.png";
// SASHIMI
import Sashimi1 from "../../../assets/img/Wakame-PNG/SASHIMI/311.png";
import Sashimi2 from "../../../assets/img/Wakame-PNG/SASHIMI/312.png";
import Sashimi3 from "../../../assets/img/Wakame-PNG/SASHIMI/313.png";
import Sashimi4 from "../../../assets/img/Wakame-PNG/SASHIMI/314.png";
// STARTER
import Starter1 from "../../../assets/img/Wakame-PNG/STARTER/20.png";
import Starter2 from "../../../assets/img/Wakame-PNG/STARTER/21.png";
import Starter3 from "../../../assets/img/Wakame-PNG/STARTER/22.png";
import Starter4 from "../../../assets/img/Wakame-PNG/STARTER/24.png";
import Starter5 from "../../../assets/img/Wakame-PNG/STARTER/25.png";
import Starter6 from "../../../assets/img/Wakame-PNG/STARTER/26.png";
import Starter7 from "../../../assets/img/Wakame-PNG/STARTER/27.png";
import Starter8 from "../../../assets/img/Wakame-PNG/STARTER/28.png";
import Starter9 from "../../../assets/img/Wakame-PNG/STARTER/29.png";
import Starter10 from "../../../assets/img/Wakame-PNG/STARTER/32.png";

// Mock data
const categories = [
  {
    name: "DESSERT",
    images: [Dessert1, Dessert2, Dessert3],
  },
  {
    name: "SASHIMI",
    images: [Sashimi1, Sashimi2, Sashimi3, Sashimi4],
  },
  {
    name: "STARTER",
    images: [
      Starter1,
      Starter2,
      Starter3,
      Starter4,
      Starter5,
      Starter6,
      Starter7,
      Starter8,
      Starter9,
      Starter10,
    ],
  },
  // Add more categories...
];

const FoodGallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Food Gallery
      </Typography>

      {categories.map((category, index) => (
        <Box key={index} sx={{ marginBottom: "4rem" }}>
          {/* Category Title */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}
          >
            {category.name}
          </Typography>

          {/* Images Grid */}
          <Grid container spacing={2}>
            {category.images.map((image, imgIndex) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={imgIndex}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    "&:hover img": {
                      transform: "scale(1.1)", // Zoom effect
                    },
                  }}
                >
                  <Image
                    src={image}
                    alt={`${category.name} ${imgIndex + 1}`}
                    width={300}
                    height={200}
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "transform 0.3s ease",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default FoodGallery;
