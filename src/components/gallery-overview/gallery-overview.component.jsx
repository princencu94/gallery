import React from 'react';

import { connect } from 'react-redux';


import './gallery-overview.styles.css';
import Gallery from '../gallery/gallery.component';
import Logo from '../logo/logo.component';
import HeaderNav from '../header-nav/header-nav.component';
import SearchField from '../search-field/search-field.component';

class GalleryOverview extends React.Component {
    constructor() {
        super();
        this.state = {
          searchField: ''
        }

      }

      handleChange = (e) => {
        this.setState({searchField: e.target.value})
      }

    render() {
        const { searchField } = this.state;
        const filteredPhotos = this.props.photos.filter(photo => photo.photographer.toLowerCase().includes(searchField.toLocaleLowerCase()));
        return (
            <div className="gallery-overview">
                <Logo/>
                <HeaderNav/>
                <SearchField placeholder="search here" handleChange={this.handleChange}/>
                <Gallery photos={filteredPhotos}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    photos : state.photo.photos
})



export default connect(mapStateToProps)(GalleryOverview);