import React, { useState } from "react";
import Input from "./Input";
import Stack from "./Stack";
import Button from "../../UI/Button";

import './AddNewProject.css';

const AddNewProject = ({projects, handleProjectAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData({ ... inputData, [e.target.name]: e.target.value }) 
    };

    const handleAddProjectClick = () => {
        handleProjectAddition(inputData)
    }


    return (
        <div className="new-project-form">
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira aqui o nome do projeto"
                handleOnChange={handleInputChange}
            />
            <Input 
                type="text" 
                text="Descrição do projeto"
                name="description" 
                placeholder="Descreva seu projeto aqui"
                handleOnChange={handleInputChange}
            />
            <Stack />
            <Button onClick={handleAddProjectClick}>Salvar</Button>
        </div>
    )
}

export default AddNewProject;