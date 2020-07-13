import React from 'react';
import { ReactComponent as Heart } from '../../assets/heart.svg';

import './like-button.styles.css';
const LikeButton = ({...props}) => {
    return (
        <div className="button-container">
            <Heart {...props}/>
        </div>
    )
}

export default LikeButton;