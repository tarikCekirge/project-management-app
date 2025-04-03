import { projectActions } from "./project-slice";

export const selectProject = (project) => (dispatch) => {
    dispatch(projectActions.setSelectedProject(project));
};

export const addNewProject = (project) => (dispatch) => {
    dispatch(projectActions.addProject(project));
}