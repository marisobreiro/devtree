import React from "react";
import ProjectStack from "./ProjectStack"

import './ProjectForm.css'

function ProjectForm() {

    return (
        <form>
            <div className="new-project__informations">
                <div className="new-project__information">
                    <label>Nome do projeto</label>
                    <input type="text" />
                </div>
                <div className="new-project__information">
                    <label>Descrição</label>
                    <input type="text" />
                </div>
                <ProjectStack />
                <div className="new-project__button">
                    <button>Salvar</button>
                </div>
            </div>
        </form>
    )
}

export default ProjectForm;