import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button className='max-w-lg px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-stone-50 cursor-pointer hover:bg-slate-600 hover:text-stone-100 w-full' {...props}>
            {children}
        </button>
    )
}

export default Button
