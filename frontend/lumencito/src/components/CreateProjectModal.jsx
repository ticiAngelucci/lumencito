import React from 'react'

const CreateProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h3 className="text-2xl font-bold mb-4">Crear Proyecto</h3>
        <p className="text-gray-600">Aquí va el formulario o contenido del modal.</p>
      </div>
    </div>
  )
}

export default CreateProjectModal
