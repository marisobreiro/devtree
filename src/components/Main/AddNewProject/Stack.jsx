import React from "react";

import './Stack.css'


const ProjectStack = ({project}) => {
    return (
        <div className="new-project__checkbox">
            <label>Stack</label>
            <div className="checkbox">
                <label>
                    <input type='checkbox' className="checkbox-icon react"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon vue"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon angular"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon html"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon css"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon js"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon bootstrap"/>
                </label>
                <label>
                    <input type='checkbox' className="checkbox-icon sass"/>
                </label>
            </div>
        </div>
    )
}

export default ProjectStack;