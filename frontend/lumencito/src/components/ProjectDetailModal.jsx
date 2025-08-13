import React from 'react'

const ProjectDetailModal = ({ isOpen, onClose, project, onDonate }) => {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-gray-500 mb-4">Objetivos: {project.objectives}</p>
        <p className="text-gray-500 mb-4">Organización: {project.orgName} ({project.orgType})</p>
        <div className="flex gap-4">
          <button
            onClick={onDonate}
            className="bg-gradient-to-r from-lumen-orange to-lumen-red text-white px-4 py-2 rounded-lg"
          >
            Donar
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
