import React, { useState } from "react";
import AddNewProject from "./AddNewProject/AddNewProject";
import Project from "./Projects/Project";

import './Main.css'

const Main = () => {

    const [projects, setProjects] = useState([
        {
            id: "1",
            title: "Patita",
            description: "Lorem ipsun et ahk fggltlpr",
            link: "github.com.br/marisobreiro",
            stack: [
                "HTML", "CSS", "JavaScript", "Thymeleaf"
            ]
        },
        {
            id: "2",
            title: "Project Cover",
            description: "Lorem ipsun et ahk fggltlpr",
            link: "github.com.br/marisobreiro",
            stack: [
                "HTML", "CSS", "JavaScript", "Bootstrap"
            ]
        },
        {
            id: "3",
            title: "Portifólio",
            description: "Lorem ipsun et ahk fggltlpr",
            link: "github.com.br/marisobreiro",
            stack: [
                "HTML", "CSS", "JavaScript"
            ]
        },
    ]);

    const handleProjectAddition = ({}) => {
        const newProject = [... projects, {
            },
        ];
        setProjects(newProject);
    }

    return (
        <>
            <AddNewProject handleProjectAddition={handleProjectAddition}/>
            <div className="projects">
                {projects.map((project) => (
                    <Project project={project}/>
                ))}
            </div>
        </>
    )
}

export default Main;