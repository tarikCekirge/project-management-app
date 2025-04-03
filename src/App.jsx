import React from 'react'
import ProjectSideBar from './components/ProjectSideBar'
import NewProject from './components/NewProject'

const App = () => {
  return (
    <>
      <main className='h-screen py-8 flex gap-8 bg-stone-50'>
        <ProjectSideBar />
        <NewProject />

      </main>
    </>
  )
}

export default App
