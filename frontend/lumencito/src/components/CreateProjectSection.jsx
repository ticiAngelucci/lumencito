import React from 'react'

const CreateProjectSection = ({ onCreateProject }) => {
  return (
    <section id="subir-proyecto" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-lumen-dark mb-6">¿Tienes una Idea Brillante?</h3>
          <p className="text-xl text-lumen-dark/80 max-w-3xl mx-auto mb-8">
            Te acompañamos paso a paso para que tu proyecto llegue a la comunidad y encuentre el apoyo que necesita.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {["Prepara tu Idea", "Completa el Formulario", "Moderación", "¡A Recaudar!"].map((step, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">{i + 1}</div>
                <h4 className="font-semibold text-lumen-dark mb-2">{step}</h4>
                <p className="text-sm text-gray-600">
                  {i === 0 && "Define claramente tu proyecto y sus objetivos"}
                  {i === 1 && "Proporciona toda la información necesaria"}
                  {i === 2 && "La comunidad verificada evalúa tu proyecto"}
                  {i === 3 && "Tu proyecto se publica y comienza a recibir apoyo"}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCreateProject}
              className="bg-gradient-to-r from-lumen-orange to-lumen-red text-white px-12 py-4 rounded-xl text-xl font-semibold hover:shadow-lg transition-all pulse-gentle"
            >
              <i className="fas fa-plus-circle mr-3"></i>Suma tu Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateProjectSection
