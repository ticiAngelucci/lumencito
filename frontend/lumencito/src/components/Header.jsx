import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/lumencito-icon.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false); 
    }
  };

  const menuItems = [
    { text: "Inicio", id: "inicio" },
    { text: "Quiénes Somos", id: "quienes-somos" },
    { text: "Proyectos", id: "proyectos" },
    { text: "Subir Proyecto", id: "subir-proyecto" },
    { text: "Moderación", href: "moderacion.html" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #FFE5D0",
        }}
        elevation={0}
      >
        <Toolbar className="container mx-auto px-4 sm:px-6">
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Box
              sx={{
                width: { xs: 48, sm: 64 },
                height: { xs: 48, sm: 64 },
                borderRadius: "50%",
                overflow: "hidden",
                mr: 2,
              }}
            >
              <img
                src={logo}
                alt="Lumencito Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1A1A1A" }}
            >
              Lumencito
            </Typography>
          </Box>

          {/* Menú Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {menuItems.map((item) =>
              item.href ? (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-black hover:text-orange transition-colors"
                >
                  {item.text}
                </a>
              ) : (
                <button
                  key={item.text}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-orange transition-colors"
                >
                  {item.text}
                </button>
              )
            )}
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#1A1A1A" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item) =>
              item.href ? (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component="a"
                    href={item.href}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => scrollToSection(item.id)}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
