import React from 'react';
import './image-row.styles.css';

import {ReactComponent as Like } from '../../assets/heart.svg';

class ImageRow extends React.Component {
        constructor() {
                super();
                this.state = {
                        heart:false
                }
        }

        handleChange = (event) => {
                event.preventDefault();
        }
        render() {
                return (
                <div className="Images">   
                        <Like onClick={this.handleChange} className="heart"/>
                        <h3>{this.props.photo.photographer}</h3>
                        <img key={this.props.photo.id} src={this.props.photo.url} alt="" />
                 </div>
                )
        }
            
}



export default ImageRow;