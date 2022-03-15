import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import Icon from "../UI/Icon";

import './SocialList.css'

function SocialList() {

    return (
        <div className="social-list">
            <Icon>
                <a href='https://www.linkedin.com/in/mariana-sobreiro/'><FaLinkedin className="social-list__item"/></a>
                <a href='https://github.com/marisobreiro'><FaGithub className="social-list__item"/></a>
            </Icon>
        </div>
    )
}

export default SocialList;