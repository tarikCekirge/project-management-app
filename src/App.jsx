import React, { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import { ToastContainer } from 'react-toastify'

import { useSelector } from 'react-redux'
import SelectedProject from './components/SelectedProject'

const App = () => {
  const selectedProject = useSelector(state => state.selectedProject)
  console.log(selectedProject)
  return (
    <>
      <main className='h-screen py-8 flex gap-8 bg-stone-50'>
        <ProjectSideBar />
        {(() => {
          if (selectedProject === null) return <NewProject />;
          if (selectedProject === undefined) return <NoProjectSelected />;
          else return <SelectedProject />
        })()}


      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
