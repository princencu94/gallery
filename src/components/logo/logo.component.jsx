import React from 'react';
import './logo.styles.css';

import {ReactComponent as Mainlogo} from '../../assets/camera1.svg';
const Logo = () => {
    return (
        <div className="logo-container">
            <Mainlogo className="logo"/>
        </div> 
    )
}

export default Logo;