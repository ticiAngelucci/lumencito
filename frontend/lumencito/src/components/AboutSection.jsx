import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 6,
        px: 3,
        background: "#F3F9E3",
      }}
    >
      {/* Título y descripción */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          sx={{ mb: 3, color: "#333" }}
        >
          Sobre Nosotros
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ maxWidth: 700, mx: "auto", color: "#555" }}
        >
          Lumencito es una plataforma que conecta soñadores con colaboradores,
          fomentando la innovación y la solidaridad.
        </Typography>
      </motion.div>

      {/* Contenido principal */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4} container spacing={3} direction="column">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "rgba(0,0,0,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ mb: 2, color: "#333" }}
              >
                Nuestra Misión
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
                Empoderar a los creadores de proyectos ofreciendo un espacio seguro y transparente donde sus ideas puedan florecer.
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "rgba(0,0,0,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ mb: 2, color: "#333" }}
              >
                Nuestra Visión
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
                Ser la comunidad de referencia para conectar ideas brillantes con personas que quieran hacerlas realidad.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>


        {/* Imagen */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Sobre Lumencito"
                sx={{
                  maxWidth: { xs: "150px", md: "350px" },
                  height: "auto",
                  borderRadius: 2,
                }}
              />
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
