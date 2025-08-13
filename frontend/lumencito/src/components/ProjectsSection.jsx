import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = ({ projects, onOpenDetail, onOpenDonate }) => (
  <section id="proyectos" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-lumen-dark mb-6">Proyectos que Necesitan tu Apoyo</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre iniciativas increíbles que están esperando tu colaboración para hacerse realidad.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(projects).map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetail={onOpenDetail}
            onOpenDonate={onOpenDonate}
          />
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection
