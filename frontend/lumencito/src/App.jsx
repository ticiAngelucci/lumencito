import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import ProjectsSection from './components/ProjectsSection'
import CreateProjectSection from './components/CreateProjectSection'
import Footer from './components/Footer'
import CreateProjectModal from './components/CreateProjectModal'
import ProjectDetailModal from './components/ProjectDetailModal'
import DonateModal from './components/DonateModal'

const projectsData = {
  1: {
    id: 1,
    title: "Educación Digital Rural",
    description: "Llevamos tecnología educativa a comunidades rurales...",
    objectives: "Instalar aulas digitales...",
    image: "https://storage.googleapis.com/.../image1.png",
    raised: 7500,
    goal: 10000,
    donors: 89,
    daysLeft: 15,
    votes: 234,
    orgName: "Fundación Educación Para Todos",
    orgType: "ONG",
    startDate: "15/03/2024",
    endDate: "15/12/2024"
  },
  2: {
    id: 2,
    title: "Huerta Comunitaria Urbana",
    description: "Creamos espacios verdes productivos en la ciudad...",
    objectives: "Establecer huertas en espacios urbanos...",
    image: "https://storage.googleapis.com/.../image2.png",
    raised: 2000,
    goal: 5000,
    donors: 45,
    daysLeft: 25,
    votes: 156,
    orgName: "Verde Urbano Cooperativa",
    orgType: "Cooperativa",
    startDate: "01/04/2024",
    endDate: "30/09/2024"
  },
  3: {
    id: 3,
    title: "Refugio de Animales",
    description: "Ampliamos nuestro refugio para rescatar más animales...",
    objectives: "Construir nuevas instalaciones...",
    image: "https://storage.googleapis.com/.../image3.png",
    raised: 1200,
    goal: 8000,
    donors: 28,
    daysLeft: 40,
    votes: 98,
    orgName: "Refugio Esperanza Animal",
    orgType: "Fundación",
    startDate: "10/02/2024",
    endDate: "10/11/2024"
  }
};

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openCreateModal = () => setIsCreateModalOpen(true)
  const closeCreateModal = () => setIsCreateModalOpen(false)

  const openProjectDetail = (projectId) => {
    setSelectedProject(projectsData[projectId])
    setIsDetailModalOpen(true)
  }
  const closeProjectDetail = () => {
    setIsDetailModalOpen(false)
    setSelectedProject(null)
  }

  const openDonateModal = (projectId) => {
    setSelectedProject(projectsData[projectId])
    setIsDonateModalOpen(true)
  }
  const closeDonateModal = () => {
    setIsDonateModalOpen(false)
    setSelectedProject(null)
  }

  const openDonateFromDetail = () => {
    setIsDetailModalOpen(false)
    setIsDonateModalOpen(true)
  }

  return (
    <div className="font-lumen bg-gradient-to-br from-lumen-cream to-orange-50">
      <Header />
      <HeroSection onCreateProject={openCreateModal} />
      <AboutSection />
      <WhatWeDoSection />
      <ProjectsSection
        projects={projectsData}
        onOpenDetail={openProjectDetail}
        onOpenDonate={openDonateModal}
      />
      <CreateProjectSection onCreateProject={openCreateModal} />
      <Footer />

      {/* Modales */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
      />
      <ProjectDetailModal
        isOpen={isDetailModalOpen}
        onClose={closeProjectDetail}
        project={selectedProject}
        onDonate={openDonateFromDetail}
      />
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={closeDonateModal}
        project={selectedProject}
      />
    </div>
  )
}

export default App
