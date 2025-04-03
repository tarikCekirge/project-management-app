import React from 'react'
import Input from './Input'

const NewProject = () => {
    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950 cursor-pointer'>Cancel</button></li>
                <li><button className='px-6 py-2 rounded-md bg-slate-800 text-stone-50 hover:bg-slate-900 cursor-pointer'>Save</button></li>
            </menu>
            <form>
                <Input label={"Title"} name={'title'} />
                <Input label={"Description"} name={'description'} textArea />
                <Input label={"Due Date"} name={'date'} />
            </form>
        </div>
    )
}

export default NewProject
