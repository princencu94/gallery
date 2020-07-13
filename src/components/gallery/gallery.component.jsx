import React from 'react';
import './gallery.styles.css';

import ImageRow from '../image-row/image-row.component';

const Gallery = (props) => (
    <div className="Gallery"> 
        <div className="gallery-photos">
            {
                props.photos.map(photo => 
                <ImageRow key={photo.id} photo={photo}/>
            )}
        </div>
    </div>
);

export default Gallery;