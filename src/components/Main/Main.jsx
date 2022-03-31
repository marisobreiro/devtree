import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNewProject from "./AddNewProject/AddNewProject";
import Project from "./Projects/Project";
import Message from "../UI/Message";

import './Main.css'

function Main() {

    const navigate = useNavigate()
    
    function createPost(project) {
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Origin: 'http://localhost:5000',
            },
            body: JSON.stringify(project),
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', { message: 'Projeto criado com sucesso'})
            })
            .catch((err) => console.log(err))
    }

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Origin:'http://localhost:5000',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <AddNewProject handleSubmit={createPost} btnText="Adicionar projeto" />
            <Message msg="Teste" />
            <div className="projects">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <Project
                            id={project.id}
                            name={project.projectName}
                            description={project.projectDescription}
                            url={project.url}
                            framework={project.framework.name}
                            handleRemove={removeProject}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Main;