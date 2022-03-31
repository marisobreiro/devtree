import React from 'react';
import {FaLeaf, FaPlus, FaTrashAlt}  from 'react-icons/fa';
import Icon from '../../UI/Icon';
import Card from '../../UI/Card';

import './Project.css'


function Project({ id, name, description, url, framework, handleRemove}) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <Card className="project">
            <div className='project-actions'>
                <FaPlus className="button" href={[url]}/>
                <FaTrashAlt className='button' onClick={remove}/>
            </div>
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