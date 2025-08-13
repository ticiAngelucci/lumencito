import React from 'react'
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import GppGoodIcon from "@mui/icons-material/GppGood";
import InsightsIcon from "@mui/icons-material/Insights";
const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-amber-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-300 mb-6">¿Qué Hacemos?</h3>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Facilitamos la conexión entre soñadores y colaboradores, creando un ecosistema de innovación y solidaridad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl card-hover">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <VolunteerActivismIcon sx={{ color: "#D8973C", fontSize: 34 }} />
              </div>
              <h5 className="font-semibold text-lumen-dark mb-2">Donar</h5>
              <p className="text-sm text-gray-600">Contribuye con proyectos que te inspiren</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl card-hover">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <UploadFileIcon sx={{ color: "#D8973C", fontSize: 34 }} />
              </div>
              <h5 className="font-semibold text-lumen-dark mb-2">Subir Proyectos</h5>
              <p className="text-sm text-gray-600">Comparte tu idea con el mundo</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl card-hover">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <GppGoodIcon sx={{ color: "#D8973C", fontSize: 34 }} />
              </div>
              <h5 className="font-semibold text-lumen-dark mb-2">Moderar</h5>
              <p className="text-sm text-gray-600">Aprueba proyectos como miembro verificado</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl card-hover">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <InsightsIcon sx={{ color: "#D8973C", fontSize: 34 }} />
              </div>
              <h5 className="font-semibold text-lumen-dark mb-2">Métricas</h5>
              <p className="text-sm text-gray-600">Seguimiento transparente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
