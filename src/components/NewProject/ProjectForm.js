import React from "react";

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
                <div className="new-project__information">
                    <label>Stack</label>
                    <select>
                        <option>React.js</option>
                        <option>Vue.js</option>
                        <option>HTML5</option>
                        <option>CSS3</option>
                        <option>JavaScript</option>
                        <option>Sass</option>
                        <option>Bootstrap</option>
                        <option>Typescript</option>
                        <option>Phyton</option>
                    </select>
                    </div>
                <div>
                    <button>Salvar</button>
                </div>
            </div>
        </form>
    )
}

export default ProjectForm;