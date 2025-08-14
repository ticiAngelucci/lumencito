import React from 'react'

const ProjectCard = ({ project, onOpenDetail, onOpenDonate }) => {
  const progressPercentage = (project.raised / project.goal) * 100

  const statusColor =
    progressPercentage >= 75 ? 'green' :
    progressPercentage >= 40 ? 'yellow' : 'red'

  const progressBarColor =
    progressPercentage >= 75 ? 'from-green-400 to-green-600' :
    progressPercentage >= 40 ? 'from-yellow-400 to-yellow-600' :
    'from-red-400 to-red-600'

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-2xl transition-shadow">
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className={`absolute top-4 right-4 bg-${statusColor}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {Math.round(progressPercentage)}% Financiado
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-lumen-dark mb-3">{project.title}</h4>
        <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Recaudado: ${project.raised.toLocaleString()}</span>
            <span>Meta: ${project.goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${progressBarColor}`}
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onOpenDonate(project.id)}
            className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all"
          >
            Donar
          </button>
          <button
            onClick={() => onOpenDetail(project.id)}
            className="flex-1 border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
          >
            Ver Más
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
