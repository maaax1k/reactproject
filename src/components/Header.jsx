import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <img src="../image/vk.png" alt=""/>
            </div>
            <div>
                <Link to={'/main'}>HOME</Link>
                <Link to={'/service'}>SERVICES</Link>
                <Link to={'/feedback'}>FEEDBACK</Link>
                <Link to={'/contact'}>CONTACT</Link>
            </div>
        </div>
    );
};

export default Header;