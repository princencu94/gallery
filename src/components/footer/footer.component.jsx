import React from 'react';
import './footer.styles.css';

const Footer = () => {

    return(
        <div className="footer">
            <p className="date">Portfolio @{new Date().getFullYear()}</p>
            <p className="social">
                <a href="www.example.com">Facebook</a>
                <a href="www.example.com">Twitter</a>
                <a href="www.example.com">Behance</a>
            </p>
        </div>
    )
}

export default Footer;