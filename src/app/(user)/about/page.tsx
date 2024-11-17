"use client";

import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://images.getbento.com/accounts/ded52d79832218f313843dbd37f0252e/media/gFSMHccsRqmq1Q9T57eA_About.jpg?w=1200&fit=max&auto=compress,format&cs=origin"
              alt="About Us"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Über uns
            </Typography>
            <Typography variant="body1" paragraph>
              Das Wakame Sushi-Restaurant von Herr Tran und Frau Vu ist eine
              harmonische Kombination aus Können, Leidenschaft und einer
              gemeinsamen Vision japanischer Kochkunst. Herr Tran hat mehr als
              16 Jahre damit verbracht, die Kunst der Sushi-Zubereitung zu
              perfektionieren, und hat nicht nur seine Technik, sondern auch ein
              besonderes Gespür für jedes Detail – vom feinsten Schnitt bis zum
              letzten Reiskorn – entwickelt. Für ihn ist Sushi eine Kunstform,
              bei der jedes Gericht nicht nur Nahrung ist, sondern eine
              Geschichte, eine Tradition und ein Spiegelbild der Hingabe.
            </Typography>
            <Typography variant="body1" paragraph>
              Frau Vu, das Herzstück des Restaurants, ist eine engagierte
              Ehefrau und eine unentbehrliche Partnerin. Sie steht nicht nur an
              Herr Trans Seite, sondern schafft eine warme und einladende
              Atmosphäre, in der die Gäste das kulinarische Erlebnis in vollen
              Zügen genießen können. Frau Vus Auge fürs Detail stellt sicher,
              dass jedes Element – von den frischesten Zutaten bis hin zur
              kleinsten Dekoration – die Sorgfalt und Nachdenklichkeit
              widerspiegelt, die sie in das Restaurant einbringt.
            </Typography>
            <Typography variant="body1">
              Die Synergie zwischen Herr Trans Kunstfertigkeit und Frau Vus
              Engagement hat ihre gemeinsame Vision in eine florierende
              kulinarische Marke verwandelt, die den wahren Geschmack Japans an
              den Tisch jedes Gastes bringt. Wir glauben, dass jede Mahlzeit
              hier nicht nur ein Erlebnis, sondern eine bleibende Erinnerung für
              unsere Gäste ist.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
