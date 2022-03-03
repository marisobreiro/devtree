import {FaLinkedin} from 'react-icons/fa';
import Icon from '../UI/Icon';

import './Linkedin.css'

function Linkedin() {
    return (
        <Icon>
            <a href='https://www.linkedin.com/in/mariana-sobreiro/' className='linkedin'>
                <FaLinkedin />
            </a>
        </Icon>
    );
}

export default Linkedin;