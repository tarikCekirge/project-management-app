import React from 'react'
import Input from './Input'

const NewTask = () => {
    return (
        <div className=' flex items-stretch gap-4'>
            <Input />
            <button className='text-slate-700 hover:text-slate-800 cursor-pointer'>Add Task</button>
        </div>
    )
}

export default NewTask
