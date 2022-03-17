import './Input.css'

const Input = ({type, text, name, placeholder}) => {
    return (
        <div className="new-project-form__input">
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;