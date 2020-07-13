import React from 'react';
import { Link } from "react-router-dom";
import './header-nav.styles.css';

const HeaderNav = () => {
    return (
       <div className="row"> 
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            
    </div>
    )
}

export default HeaderNav;

