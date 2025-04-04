import React from 'react';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { addTaskToProject } from "../store/project-actions";
import { toast } from "react-toastify";

const NewTask = () => {
    const dispatch = useDispatch();
    const selectedProjectId = useSelector(state => state.selectedProject);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        if (!selectedProjectId) {
            toast.error("No project selected!");
            return;
        }

        const newTask = { id: Date.now(), title: data.task };

        dispatch(addTaskToProject(selectedProjectId, newTask));

        toast.success("Task added successfully!");
        reset();
    };
    return (
        <form id="new-task" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-4 justify-center">
                <Input name="task" {...register("task", { required: "Task is required" })} />
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`h-fit cursor-pointer ${isValid ? "text-stone-900" : "text-stone-600 cursor-not-allowed"}`}
                >
                    Add Task
                </button>
            </div>
            {errors.task && <p className="text-red-500 text-xs">{errors.task.message}</p>}
        </form>
    );
};

export default NewTask;
