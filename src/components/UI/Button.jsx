import React from "react";

import './Button.css'

const Button = ({ text, type }) => {
    return (
        <button type={type} className="button">
            {text}
        </button>
    )
}

export default Button;