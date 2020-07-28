import React, { useState } from 'react';

import { connect } from 'react-redux';

import './gallery-overview.styles.css';
import Gallery from '../gallery/gallery.component';
import Logo from '../logo/logo.component';
import HeaderNav from '../header-nav/header-nav.component';
import SearchField from '../search-field/search-field.component';

const GalleryOverview = ({  photos }) => {
    const [search, setSearch] = useState('');

      const handleChange = (e) => {
          setSearch(e.target.value)
      }
      const filteredPhotos = photos.filter(photo => photo.photographer.toLowerCase().includes(search.toLowerCase()))
        return (
            
            <div className="gallery-overview">
                <Logo/>
                <HeaderNav/>
                <SearchField placeholder="search here" handleChange={handleChange}/>
                <Gallery photos={filteredPhotos}/>
            </div>
        )
    
}

const mapStateToProps = state => ({
    photos : state.photo.photos,
})



export default connect(mapStateToProps)(GalleryOverview);