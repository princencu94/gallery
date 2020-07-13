import React from 'react';
import './image-row.styles.css';


import LikeButton from '../like-button/like-button.component';
class ImageRow extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        heart:true
                }
        }

        handleClick = (event) => {
                event.preventDefault();
                if(this.state.heart === true) {
                        this.setState({heart:false})
                } else if(this.state.heart === false) {
                        this.setState({heart:true})
                }
               
                console.log("You clicked on the like " + this.state.heart);
        }
        render() {
                const { heart } = this.state;
                return (
                <div className="Images">   
                        <LikeButton className={heart ? "unlike" : "like" } />
                        <h3>{this.props.photo.photographer}</h3>
                        <img onClick={this.handleClick} key={this.props.photo.id} src={this.props.photo.url} alt="" />
                 </div>
                )
        }
            
}



export default ImageRow;