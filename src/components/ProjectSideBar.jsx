import { useDispatch, useSelector } from 'react-redux'
import { selectProject } from "../store/project-actions";
import Button from './Button'

const ProjectSideBar = () => {
    const dispatch = useDispatch()

    const projects = useSelector(state => state.projects)

    const handleSelectProject = (id) => {
        dispatch(selectProject(id));
    }
    return (
        <aside className='w-1/3 px-8 py-16 bg-slate-800 text-stone-50 md:w-72 rounded-r-xl h-full'>
            <h2 className=' mb-8 font-bold uppercase md:text-xl text-stone-50'>Your Projects</h2>

            <ul className='mt-8'>
                {projects && projects.map((item) => <li key={item.id}><button onClick={() => handleSelectProject(item.id)} className='w-full cursor-pointer text-left px-2 py-1 rounded-sm my-1 text-slate-100 hover:text-slate-200 hover:bg-slate-700'>{item.title}</button></li>)}

            </ul>
        </aside>
    )
}

export default ProjectSideBar
