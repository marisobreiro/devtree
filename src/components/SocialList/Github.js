import {FaGithub} from 'react-icons/fa';
import Icon from '../UI/Icon';

import './Github.css'

function Github() {
    return (
        <Icon>
            <a href='https://github.com/marisobreiro' className="github">
                <FaGithub />
            </a>
        </Icon>
    );
}

export default Github;