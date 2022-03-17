import React, {useState} from 'react';
import {FaLeaf} from 'react-icons/fa';
import Stack from './Stack';
import Icon from '../UI/Icon';
import Card from '../UI/Card';

import './Project.css'

const Project = ({project}) => {

    return (
        <Card className="project">
            <Icon>
                <FaLeaf />
            </Icon>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
                {project.stack.map((stack) => (
                    <Stack stack={stack}/>
                ))}
            </div>
        </Card>
    );
}

export default Project;