import React from 'react'
import noProject from '../assets/no-projects.png'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { projectActions } from '../store/project-slice'

const NoProjectSelected = () => {
    const dispatch = useDispatch()
    const handleNewProject = () => {
        dispatch(projectActions.setSelectedProject(null));
    };
    return (
        <div className='mt-2 text-center w-2/3'>
            <img src={noProject} alt="Empty Task" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl font-black text-stone-500 mt-4 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={handleNewProject}>
                    Create New Project
                </Button>
            </p>
        </div>
    )
}

export default NoProjectSelected
