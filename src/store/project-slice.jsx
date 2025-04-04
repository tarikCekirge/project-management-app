import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedProject: undefined,
    projects: []

}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setSelectedProject: (state, action) => {
            state.selectedProject = action.payload;
        },
        addProject: (state, action) => {
            state.projects.unshift(action.payload)
        },
        updateProject: (state, action) => {
            const { id, data } = action.payload;
            const projectIndex = state.projects.findIndex(proj => proj.id === id);
            if (projectIndex !== -1) {
                state.projects[projectIndex] = { ...state.projects[projectIndex], data }
            }
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(proj => proj.id !== action.payload)
        },
        addTaskToProject: (state, action) => {
            const { projectId, task } = action.payload;
            const project = state.projects.find(proj => proj.id === projectId);
            if (project) {
                project.tasks = project.tasks ? [...project.tasks, task] : [task];
            }
        },
        deleteTaskFromProject: (state, action) => {
            const { projectId, taskId } = action.payload;
            const project = state.projects.find(proj => proj.id === projectId);
            if (project) {
                project.tasks = project.tasks.filter(task => task.id !== taskId);
            }
        },

    }
})


export const projectActions = projectSlice.actions;
export default projectSlice