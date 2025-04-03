import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addNewProject } from "../store/project-actions";
import { toast } from "react-toastify";

const NewProject = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        const newProject = { ...data, id: Date.now() };
        dispatch(addNewProject(newProject));
        toast.success("Project created successfully! 🎉");
        reset()
    };

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950 cursor-pointer">
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        type="submit"
                        form="new-project-form"
                        disabled={!isValid}
                        className={`px-6 py-2 rounded-md text-stone-50 cursor-pointer
                            ${isValid ? "bg-slate-800 hover:bg-slate-900" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                        Save
                    </button>
                </li>
            </menu>

            <form id="new-project-form" onSubmit={handleSubmit(onSubmit)}>
                {/* Title Input */}
                <Input label="Title" name="title" {...register("title", { required: "Title is required" })} />
                {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}

                {/* Description Input */}
                <Input
                    label="Description"
                    name="description"
                    textArea
                    {...register("description", { required: "Description is required" })}
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}

                {/* Due Date Input */}
                <Input label="Due Date" type="date" name="date" {...register("date", { required: "Due Date is required" })} />
                {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
            </form>
        </div>
    );
};

export default NewProject;
