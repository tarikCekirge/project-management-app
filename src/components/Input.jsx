import React from "react";

const Input = ({ textArea, name, label, type = "text", ...props }) => {
    const classes =
        "w-full p-1 border-b-2 border-slate-300 bg-slate-200 text-stone-800 focus:ring-0 outline-0 focus:border-slate-600";

    return (
        <p className="flex flex-col gap-1 my-4 flex-1">
            <label className="text-sm font-bold text-stone-400" htmlFor={name}>
                {label}
            </label>
            {textArea ? (
                <textarea className={classes} name={name} {...props} />
            ) : (
                <input type={type} name={name} {...props} className={classes} />
            )}
        </p>
    );
};

export default Input;
