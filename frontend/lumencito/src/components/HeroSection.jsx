import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { useStellarWallet } from "../services/useStellarWallet";

const HeroSection = ({ onCreateProject }) => {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { address, error, connectWallet, disconnectWallet } = useStellarWallet();
  return (
    <Box
      id="inicio"
      sx={{
        background:
          "radial-gradient(circle at center, rgba(251,179,63,1) 0%, rgba(204,102,0,1) 100%)",
        color: "white",
        minHeight: "100vh",
        px: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            mb: 3,
            fontSize: { xs: "2rem", md: "3rem" },
            textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          Convierte tus ideas en proyectos que{" "}
          <Box
            component="span"
            sx={{
              color: "#FFFFFF",
              background: "rgba(255, 87, 34, 0.85)",
              borderRadius: "6px",
              px: 1,
              py: 0.5,
              fontWeight: "bold",
            }}
          >
            cambian el mundo
          </Box>
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Typography
          variant="h6"
          sx={{
            maxWidth: "700px",
            mx: "auto",
            mb: 6,
            color: "rgba(255,255,255,0.9)",
            textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
          }}
        >
          Únete a la comunidad más cálida de crowdfunding. Donde cada proyecto
          tiene el potencial de cambiar el mundo, un mate a la vez.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={scrollToProjects}
            startIcon={<RocketLaunchIcon />}
            sx={{
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: "#FFD54F",
              color: "#FF5722",
              "&:hover": {
                backgroundColor: "#FFC107",
              },
            }}
          >
            Explorar Proyectos
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={connectWallet}
            startIcon={<AddIcon />}
            sx={{
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Crear Proyecto
          </Button>
          <Box>
            {error && (
              <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                {error}
              </Typography>
            )}
            {!address ? (
              <Button variant="contained" color="secondary" onClick={connectWallet}>
                Conectar Wallet
              </Button>
            ) : (
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Conectado: {address.slice(0, 6)}…{address.slice(-4)}
                </Typography>
                <Button size="small" onClick={disconnectWallet}>
                  Desconectar
                </Button>
              </Box>
            )}
          </Box>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
