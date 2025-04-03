import React from 'react'
import ProjectSideBar from './components/ProjectSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'

const App = () => {
  return (
    <>
      <main className='h-screen py-8 flex gap-8 bg-stone-50'>
        <ProjectSideBar />
        <NoProjectSelected />
        {/* <NewProject /> */}

      </main>
    </>
  )
}

export default App
