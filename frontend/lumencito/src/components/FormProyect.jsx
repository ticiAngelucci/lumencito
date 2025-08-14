import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Button,
  Typography,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FlagIcon from "@mui/icons-material/Flag";
import BuildIcon from "@mui/icons-material/Build";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const groups = [
  {
    label: "Información General",
    icon: <AccountBalanceIcon color="primary" />,
    fields: ["Tipo de organización", "Nombre del proyecto"],
  },
  {
    label: "Objetivos y Problemas",
    icon: <FlagIcon color="secondary" />,
    fields: ["Objetivos", "Problema a solucionar", "Resultados esperados"],
  },
  {
    label: "Productos y Actividades",
    icon: <BuildIcon color="success" />,
    fields: ["Productos tras la intervención", "Actividades"],
  },
  {
    label: "Planificación",
    icon: <CalendarTodayIcon color="action" />,
    fields: ["Esquema de presupuesto", "Calendario de actividades"],
  },
];

export default function FormProject({ open, onClose }) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [formData, setFormData] = useState({});
  const [completed, setCompleted] = useState(false); 

  const handleNext = () => {
    if (currentGroup < groups.length - 1) {
      setCurrentGroup((prev) => prev + 1);
    } else {
      setCompleted(true);
      console.log("Formulario completado:", formData);
    }
  };

  const handleBack = () => {
    if (completed) setCompleted(false); 
    else setCurrentGroup((prev) => prev - 1);
  };

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" fontWeight="bold">
          {completed ? "¡Proyecto enviado!" : "Crear nuevo proyecto"}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          maxHeight: "80vh",
          overflowY: "auto",
          paddingY: 3,
        }}
      >
        {completed ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" gutterBottom>
              🎉 ¡Felicidades!
            </Typography>
            <Typography variant="body1">
              Tu proyecto ha sido enviado con éxito y ahora está a la espera de revisión por la DAO de Stellar. Pronto recibirás la confirmación para su publicación.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 4, bgcolor: "#4f46e5", ":hover": { bgcolor: "#4338ca" } }}
              onClick={onClose}
            >
              Cerrar
            </Button>
          </Box>
        ) : (
          <>
            <Stepper activeStep={currentGroup} alternativeLabel sx={{ mb: 4 }}>
              {groups.map((group, index) => (
                <Step key={index}>
                  <StepLabel
                    StepIconComponent={() => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: currentGroup === index ? "#D1D5DE" : "#ccc",
                          color: "white",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                        }}
                      >
                        {group.icon}
                      </Box>
                    )}
                  >
                    {group.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 3,
                bgcolor: "#f5f7ff",
              }}
            >
              <Stack spacing={3}>
                {groups[currentGroup].fields.map((field, idx) => (
                  <TextField
                    key={idx}
                    label={field}
                    multiline
                    fullWidth
                    rows={field.length > 20 ? 3 : 1}
                    value={formData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button
                disabled={currentGroup === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ borderRadius: 3 }}
              >
                Atrás
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ borderRadius: 3, bgcolor: "#4f46e5", ":hover": { bgcolor: "#4338ca" } }}
              >
                {currentGroup === groups.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
