import {FaLeaf} from 'react-icons/fa';
import Stack from './Stack';
import Icon from '../UI/Icon';
import Card from '../UI/Card';

import './Project.css'

function Project() {

    return (
        <Card className="project">
            <Icon>
                <FaLeaf />
            </Icon>
            <h2>Título do projeto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est nec diam blandit, sed posuere libero faucibus.</p>
            <Stack />
        </Card>
    );
}

export default Project;