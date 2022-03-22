import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddNewProject from "./AddNewProject/AddNewProject";
import Project from "./Projects/Project";

import './Main.css'

function Main() {

    const navigate = useNavigate()
    
    const [data, setData] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Origin: 'http://localhost:5000'
            }, 
        })
            .then((resp) => resp.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function createPost(project) {
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', { message: 'Projeto criado com sucesso'})
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <AddNewProject handleSubmit={createPost} btnText="Adicionar projeto" />
            <div className="projects">
                <Project thing={data} />
            </div>
        </>
    )
}

export default Main;