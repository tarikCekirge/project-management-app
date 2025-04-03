import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProjectById, selectProject } from '../store/project-actions';  // Yorum satırından çıkarılmalı
import { toast } from 'react-toastify';
import Tasks from './Tasks';

const SelectedProject = () => {
    const dispatch = useDispatch();
    const selectedProjectId = useSelector(state => state.selectedProject);
    const projects = useSelector(state => state.projects);

    const selectedProject = projects.find(project => project.id === selectedProjectId);

    const handleDelete = () => {
        if (selectedProject) {
            dispatch(deleteProjectById(selectedProject.id));
            dispatch(selectProject(undefined));
            toast.success("Project Deleted");
        }
    };


    if (!selectedProject) {
        return <p className='bg-slate-400 p-4 rounded-sm'>No project selected</p>;
    }

    return (
        <div className='w-[35rem] mt-16'>
            <header className='pb-4 mb-4 border-b-2 border-slate-300'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-stone-600'>{selectedProject.title}</h1>
                    <button
                        onClick={handleDelete}
                        className='text-slate-600 hover:text-slate-900 cursor-pointer'
                    >
                        Delete
                    </button>
                </div>
                <p className='mb-4 text-slate-700'>{selectedProject.date}</p>
                <p className='text-slate-600 whitespace-pre-wrap'>{selectedProject.description}</p>
            </header>
            <Tasks tasks={selectedProject.tasks} />
        </div>
    );
};

export default SelectedProject;
