import Input from "./Input";
import ProjectStack from "./ProjectStack";

import './NewProjectForm.css';
import { useState } from "react";

function ProjectForm(handleSubmit, projectData) {

    const [project, setProject] = useState( projectData || {} )

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject ({...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <div className="new-project-form">
            <form onSubmit={submit}>
                <Input 
                    type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insira aqui o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name}
                />
                <Input 
                    type="text" 
                    text="Descrição do projeto"
                    name="description" 
                    placeholder="Descreva seu projeto aqui" 
                    handleOnChange={handleChange}
                    value={project.description}
                />
                <ProjectStack />
                <div className="new-project-form__button">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm;