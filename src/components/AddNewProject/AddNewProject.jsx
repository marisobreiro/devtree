import React, { useState } from "react";
import Input from "./Input";
import Stack from "./Stack";

import './AddNewProject.css';

const ProjectForm = () => {
    return (
        <div className="new-project-form">
            <form>
                <Input 
                    type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insira aqui o nome do projeto"
                />
                <Input 
                    type="text" 
                    text="Descrição do projeto"
                    name="description" 
                    placeholder="Descreva seu projeto aqui"
                />
                <Stack />
                <div className="new-project-form__button">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm;