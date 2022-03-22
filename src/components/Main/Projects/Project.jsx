import React from 'react';
import {FaLeaf, FaPlus}  from 'react-icons/fa';
import Icon from '../../UI/Icon';
import Card from '../../UI/Card';

import './Project.css'


function Project({}) {

    return (
        <Card className="project">
            <FaPlus className='button'/>
            <Icon>
                <FaLeaf />
            </Icon>
            <div>

            </div>
            <p></p>
        </Card>
    );
}

export default Project;