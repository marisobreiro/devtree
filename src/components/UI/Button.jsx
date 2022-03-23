import React from "react";

import './Button.css'

const Button = ({ text, type, url }) => {
    return (
        <button type={type} href={url} className="button">
            {text}
        </button>
    )
}

export default Button;