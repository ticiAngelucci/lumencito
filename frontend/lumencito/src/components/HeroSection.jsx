import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { useStellarWallet } from "../services/useStellarWallet";
import FormProject from "./FormProyect";

const HeroSection = () => {
  const { address, error, connectWallet, disconnectWallet } = useStellarWallet();
  const [openForm, setOpenForm] = useState(false);
  const [waitingForWallet, setWaitingForWallet] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCreateProject = async () => {
    if (!address) {
      setWaitingForWallet(true); 
      try {
        await connectWallet();
      } catch (err) {
        console.error("Error conectando wallet:", err);
        setWaitingForWallet(false);
        return;
      }
    } else {
      setOpenForm(true);
    }
  };
  useEffect(() => {
    if (waitingForWallet && address) {
      setOpenForm(true);
      setWaitingForWallet(false);
    }
  }, [address, waitingForWallet]);

  return (
    <Box
      id="inicio"
      sx={{
        background: "radial-gradient(circle at center, rgba(251,179,63,1) 0%, rgba(204,102,0,1) 100%)",
        color: "white",
        minHeight: "100vh",
        px: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" }, textShadow: "2px 2px 12px rgba(0,0,0,0.5)" }}>
          Convierte tus ideas en proyectos que{" "}
          <Box component="span" sx={{ color: "#FFFFFF", background: "rgba(255, 87, 34, 0.85)", borderRadius: "6px", px: 1, py: 0.5, fontWeight: "bold" }}>
            cambian el mundo
          </Box>
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button variant="contained" size="large" onClick={scrollToProjects} startIcon={<RocketLaunchIcon />} sx={{ fontWeight: "bold", px: 4, py: 1.5, borderRadius: 3, backgroundColor: "#FFD54F", color: "#FF5722", "&:hover": { backgroundColor: "#FFC107" } }}>
            Explorar Proyectos
          </Button>

          <Button variant="outlined" size="large" onClick={handleCreateProject} startIcon={<AddIcon />} sx={{ fontWeight: "bold", px: 4, py: 1.5, borderRadius: 3, color: "white", borderColor: "white", "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}>
            Crear Proyecto
          </Button>
        </Stack>
      </motion.div>

      {openForm && <FormProject open={openForm} onClose={() => setOpenForm(false)} />}
    </Box>
  );
};

export default HeroSection;
