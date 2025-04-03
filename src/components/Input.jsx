import React from 'react'

const Input = ({ textArea, name, label, ...props }) => {
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            {textArea ? <textarea name={name} {...props} /> : <input type="text" name={name} {...props} />}
        </p>
    )
}

export default Input
