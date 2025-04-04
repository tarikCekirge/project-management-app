import React from 'react';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskFromProject } from '../store/project-actions';
import { toast } from 'react-toastify';

const Tasks = ({ tasks }) => {
    const dispatch = useDispatch();
    const selectedProjectId = useSelector(state => state.selectedProject);

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTaskFromProject(selectedProjectId, taskId));
        toast.success("Task deleted!");
    };

    return (
        <section>
            <h2 className='text-2xl font-bold text-slate-700'>Tasks</h2>
            <NewTask />
            {tasks.length === 0 ? (
                <p className='text-slate-800 mb-4'>This Project does not have any tasks</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className='flex justify-between items-center bg-gray-100 p-2 rounded-md my-2'>
                            <span>{task.title}</span>
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="cursor-pointer"
                            >
                                🗑
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Tasks;
