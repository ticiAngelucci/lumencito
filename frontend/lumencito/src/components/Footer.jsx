import React from 'react'
import logo from "../assets/logo.png";
import { Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-lumen-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">

          <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
            <Box
              sx={{
                width: { xs: 48, sm: 64 },
                height: { xs: 48, sm: 64 },
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={logo}
                alt="Lumencito Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <h4 className="text-xl text-black font-bold">Lumencito</h4>
          </div>

          <div>
            <h5 className="font-semibold mb-2 text-center md:text-left">Enlaces</h5>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-amber-600 items-center md:items-start">
              {["Inicio", "Proyectos", "Sobre Nosotros", "Contacto"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-lumen-orange transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h5 className="font-semibold mb-2">Síguenos</h5>
            <div className="flex space-x-4">
              {[
                { icon: <TwitterIcon sx={{ color: 'orange' }} />, href: '#' },
                { icon: <InstagramIcon sx={{ color: 'orange' }} />, href: '#' },
                { icon: <LinkedInIcon sx={{ color: 'orange' }} />, href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-10 h-10 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center hover:shadow-lg transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Lumencito. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
