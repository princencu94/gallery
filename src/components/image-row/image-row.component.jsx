import React, { useState } from 'react';
import './image-row.styles.css';




import LikeButton from '../like-button/like-button.component';
const ImageRow = ({ photo }) => {
              const [like, setLike] = useState(true)
                return (
                <div className="Images">   
                        <LikeButton className={like ? "unlike" : "like" } />
                        <h3>{photo.photographer}</h3>
                        <img onClick={() => setLike(false)} key={photo.id} src={photo.url} alt="" />
                 </div>
                )       
}

export default ImageRow;