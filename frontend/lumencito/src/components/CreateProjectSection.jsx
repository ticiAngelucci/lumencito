import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const CreateProjectSection = ({ onCreateProject }) => {
  const steps = [
    { title: "Prepara tu Idea", desc: "Define claramente tu proyecto y sus objetivos", icon: <LightbulbIcon fontSize="large" sx={{ color: '#FFA500' }} /> },
    { title: "Completa el Formulario", desc: "Proporciona toda la información necesaria", icon: <AssignmentIcon fontSize="large" sx={{ color: '#FFA500' }} /> },
    { title: "Moderación", desc: "La comunidad verificada evalúa tu proyecto", icon: <VerifiedUserIcon fontSize="large" sx={{ color: '#FFA500' }} /> },
    { title: "¡A Recaudar!", desc: "Tu proyecto se publica y comienza a recibir apoyo", icon: <AttachMoneyIcon fontSize="large" sx={{ color: '#FFA500' }} /> },
  ];

  return (
    <section id="subir-proyecto" className="py-20 bg-amber-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-300 mb-6">¿Tienes una Idea Brillante?</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Te acompañamos paso a paso para que tu proyecto llegue a la comunidad y encuentre el apoyo que necesita.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"> {step.icon}</div>
                <h4 className="font-semibold text-lumen-dark mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onCreateProject}
              className="border-2 border-gray-300 text-white px-12 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center mx-auto"
            >
              <AddCircleIcon sx={{ color: '#D8C99B', mr: 1 }} fontSize="medium" /> Suma tu Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateProjectSection
