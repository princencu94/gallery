import React from 'react';
import './search-field.styles.css';

const SearchField = ({placeholder, handleChange}) => {
    return(
        <div className="search">
            <input className="text" type="text" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default SearchField;