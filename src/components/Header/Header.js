import Icon from "../UI/Icon";
import {FaTree} from 'react-icons/fa';

import './Header.css'

function Header() {

    return (
        <div className="header">
            <h1>devtree</h1>
            <Icon>
                <FaTree />
            </Icon>
        </div>
    )
}

export default Header;