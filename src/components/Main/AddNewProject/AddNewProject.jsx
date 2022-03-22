import React, { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "../../UI/Button";

import './AddNewProject.css';

function AddNewProject ({ handleSubmit, btnText, projectData }) {

    const [frameworks, setFrameworks] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/frameworks', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Origin: 'http://localhost:5000'
            },
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                setFrameworks(data)
            })
            .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleStack(e) {
        setProject({ ...project, framework: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className="new-project-form">
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="projectName" 
                placeholder="Insira aqui o nome do projeto"
                handleOnChange={handleChange}
                value={project.name}
            />
            <Input 
                type="text" 
                text="Descrição do projeto"
                name="projectDescription" 
                placeholder="Descreva seu projeto aqui"
                handleOnChange={handleChange}
                value={project.description}
            />
            <Select 
                name="projectStack"
                text="Stack do projeto"
                options={frameworks}
                handleOnChange={handleStack}
                value={project.framework ? project.framework.id: ''}
            />
            <Button type="submit" text={btnText}></Button>
        </form>
    )
}

export default AddNewProject;