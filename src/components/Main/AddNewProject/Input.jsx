import React from 'react';
import './Input.css'

const Input = ({type, text, name, placeholder, maxlen, handleOnChange, value}) => {
    
    return (
        <div className="input">
            <label htmlFor={name}>
                {text}:
            </label>
            <input 
                required
                autoComplete='off'
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Input;