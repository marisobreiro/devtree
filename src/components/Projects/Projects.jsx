import React, {useState} from "react";
import Project from "./Project";

import './Projects.css'

const Portfolio = () => {

    const [projects, setProjects] = useState([
        {
            id: "1",
            title: "Patita",
            description: "Lorem ipsun et ahk fggltlpr",
            stack: [
                "HTML", "CSS", "JavaScript", "Thymeleaf"
            ]
        },
        {
            id: "2",
            title: "Project Cover",
            description: "Lorem ipsun et ahk fggltlpr",
            stack: [
                "HTML", "CSS", "JavaScript", "Bootstrap"
            ]
        },
        {
            id: "3",
            title: "Portifólio",
            description: "Lorem ipsun et ahk fggltlpr",
            stack: [
                "HTML", "CSS", "JavaScript"
            ]
        },
    ]);

    return (
        <div className="portfolio">
            {projects.map((project) => (
                <Project project={project}/>
            ))}
        </div>
    )
}

export default Portfolio;