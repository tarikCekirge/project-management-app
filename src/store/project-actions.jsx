import { projectActions } from "./project-slice";

export const selectProject = (project) => (dispatch) => {
    dispatch(projectActions.setSelectedProject(project));
};

export const addNewProject = (project) => (dispatch) => {
    dispatch(projectActions.addProject(project));
};

export const updateExistingProject = (id, data) => (dispatch) => {
    dispatch(projectActions.updateProject({ id, data }));
};

export const deleteProjectById = (id) => (dispatch) => {
    dispatch(projectActions.deleteProject(id));
};
