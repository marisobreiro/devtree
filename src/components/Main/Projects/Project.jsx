import React from 'react';
import {FaLeaf, FaPlus}  from 'react-icons/fa';
import Icon from '../../UI/Icon';
import Card from '../../UI/Card';

import './Project.css'


function Project({ name, description, url, framework, handleRemove}) {

    return (
        <Card className="project">
            <FaPlus className="button" href={url}/>
            <Icon>
                <FaLeaf />
            </Icon>
            <div className="project-content">
                <h2>{name}</h2>
                <p>{description}</p>
                <p className="project-content__badge">{framework}</p>
            </div>
        </Card>
    );
}

export default Project;