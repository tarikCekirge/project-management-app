import React from 'react'
import NewTask from './NewTask'

const Tasks = ({ tasks }) => {
    return (
        <section>
            <h2 className='text-2xl font-bold text-slate-700'>Tasks</h2>
            <NewTask />
            {tasks && tasks.length === 0 ? (
                <p className='text-slate-800 mb-4'>This Project does not have any tasks</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className='text-slate-600 mb-2'>
                            {task.title}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Tasks
