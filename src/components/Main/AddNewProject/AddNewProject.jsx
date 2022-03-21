import React, { useState } from "react";
import Input from "./Input";
import Stack from "./Stack";
import Button from "../../UI/Button";

import './AddNewProject.css';

const AddNewProject = ({handleProjectAddition, projectName, projectDescription}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const data ={
            projectName: e.target.elements.projectName.value,
            projectDescription: e.target.elements.projectDescription.value,
        }
        handleProjectAddition(data);
    }

    return (
        <form onSubmit={onSubmit} className="new-project-form">
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="projectName" 
                placeholder="Insira aqui o nome do projeto"
            />
            <Input 
                type="text" 
                text="Descrição do projeto"
                name="projectDescription" 
                placeholder="Descreva seu projeto aqui"
            />
            <Stack />
            <Button type="submit">Salvar</Button>
        </form>
    )
}

export default AddNewProject;