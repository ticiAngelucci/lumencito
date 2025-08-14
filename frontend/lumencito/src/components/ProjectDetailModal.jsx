import React from 'react'

const ProjectDetailModal = ({ isOpen, onClose, project, onDonate }) => {
  if (!isOpen || !project) return null

  const progress = Math.min(
    100,
    Math.round((project.raised / project.goal) * 100)
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-y-auto max-h-[90vh] relative">
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        {project.image && (
          <div className="w-full h-64 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>

          <div className="text-gray-500 space-y-1">
            <p><strong>Objetivos:</strong> {project.objectives}</p>
            <p><strong>Organización:</strong> {project.orgName} ({project.orgType})</p>
            <p><strong>Fecha:</strong> {project.startDate} - {project.endDate}</p>
          </div>

          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-lumen-orange to-lumen-red h-4 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Recaudado ${project.raised} de ${project.goal} ({progress}%)
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={onDonate}
              className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Donar
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
