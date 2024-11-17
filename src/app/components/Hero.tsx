"use client"; // Client Component
import React from "react";
import { Box, Grid } from "@mui/material"; // Box for layout styling
import HeroImage from "../../assets/img/wakame-6.jpg"; // Main Hero Image
import Image from "next/image"; // For image optimization
import img1 from "../../assets/img/wakame-1.jpg"; // Other images
import img2 from "../../assets/img/wakame-2.jpg";
import img3 from "../../assets/img/wakame-3.jpg";
import img4 from "../../assets/img/wakame-4.jpg";
import img5 from "../../assets/img/wakame-5.jpg";

const Hero = () => {
  // List of images to display
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh", // Full height of the viewport
          // backgroundImage: url(${HeroImage}), // Set your image path for background
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repetition
        }}
      >
        {/* Optional: Image Element, if you want an actual image on top */}
        <Image
          src={HeroImage} // src should point to the local or public path
          alt="order-banner"
          layout="fill" // Makes the image cover the entire box (like a background image)
          objectFit="cover" // Ensures the image doesn't stretch, keeps its aspect ratio
          quality={100} // Optional: To optimize image quality
        />

        {/* Optional: Overlay content or text over the hero image */}
        {/* <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>Welcome to Our Restaurant</h1>
          <p>Enjoy the finest dining experience</p>
        </Box> */}
      </Box>

      <Box sx={{ overflow: "hidden", mt: 2 }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          {/* First Row */}
          <Grid item xs={12} sm={4} md={3} lg={3} sx={{ height: "65vh" }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <Image
                src={images[0]}
                alt="Gallery Image 1"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={9} sx={{ height: "65vh" }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <Image
                src={images[1]}
                alt="Gallery Image 2"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={8} md={9} lg={9} sx={{ height: "65vh" }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <Image
                src={images[2]}
                alt="Gallery Image 3"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3} sx={{ height: "65vh" }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <Image
                src={images[3]}
                alt="Gallery Image 4"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
          </Grid>

          {/* Third Row (Full Width) */}
          <Grid item xs={12} sx={{ height: "65vh" }}>
            <Box sx={{ position: "relative", height: "100%" }}>
              <Image
                src={images[4]}
                alt="Gallery Image 5"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Hero;
