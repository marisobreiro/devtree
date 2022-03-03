import Github from "./Github";
import Linkedin from "./Linkedin";

import './SocialList.css'

function SocialList() {

    return (
        <div className="social-list">
            <Linkedin />
            <Github />
        </div>
    )
}

export default SocialList;