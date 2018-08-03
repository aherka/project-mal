import React, { Component } from 'react';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return(
            <div className='Navbar'>

                <div className="nav-item">
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
                        <path fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" d="M 20 80 H 80 V 40 L 50 15 20 40 Z" />
                    </svg>
                    <div className="nav-item-name">
                        Home
                    </div>
                </div>

                <div className="nav-item">
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
                        <path fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" d="M 20 80 H 80 V 40 L 50 15 20 40 Z" />
                    </svg>
                    <div className="nav-item-name">
                        Residents
                    </div>
                </div>

                <div className="nav-item">
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
                        <path fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" d="M 20 80 H 80 V 40 L 50 15 20 40 Z" />
                    </svg>
                    <div className="nav-item-name">
                        Economy
                    </div>
                </div>

                <div className="nav-item" style={{top: "calc(100% - 195px)"}}>
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
                        <path fill="none" stroke="black" strokeWidth="8" strokeLinejoin="round" d="M 20 80 H 80 V 40 L 50 15 20 40 Z" />
                    </svg>
                    <div className="nav-item-name">
                        Settings
                    </div>
                </div>


            </div>
        );
    }
}
