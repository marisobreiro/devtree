import React from 'react';
import {FaLeaf, FaPlus}  from 'react-icons/fa';
import Icon from '../../UI/Icon';
import Card from '../../UI/Card';

import './Project.css'

const Project = ({project}) => {

    return (
        <Card className="project">
            <FaPlus className='button'/>
            <Icon>
                <FaLeaf />
            </Icon>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </Card>
    );
}

export default Project;