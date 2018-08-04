import React, { Component } from 'react';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return(
            <div className='Navbar'>

                <div className={this.props.selectedContent === 'home' ? "nav-item nav-selected" : "nav-item"} onClick={() => this.props.onChangeNav('home')}>
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path fill="black" stroke="none" strokeWidth="0" strokeLinejoin="round" d="M10,19v-5h4v5c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-7h1.7c0.46,0,0.68-0.57,0.33-0.87L12.67,3.6   c-0.38-0.34-0.96-0.34-1.34,0l-8.36,7.53C2.63,11.43,2.84,12,3.3,12H5v7c0,0.55,0.45,1,1,1h3C9.55,20,10,19.55,10,19z" />
                    </svg>
                    <div className="nav-item-name">
                        home
                    </div>
                </div>

                <div className={this.props.selectedContent === 'residents' ? "nav-item nav-selected" : "nav-item"} onClick={() => this.props.onChangeNav('residents')}>
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path fill="black" stroke="none" strokeWidth="0" strokeLinejoin="round" d="M15,11V5.83c0-0.53-0.21-1.04-0.59-1.41l-1.71-1.71c-0.39-0.39-1.02-0.39-1.41,0L9.59,4.41C9.21,4.79,9,5.3,9,5.83V7H5   C3.9,7,3,7.9,3,9v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2H15z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11   z M13,19h-2v-2h2V19z M13,15h-2v-2h2V15z M13,11h-2V9h2V11z M13,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" />
                    </svg>
                    <div className="nav-item-name">
                        residents
                    </div>
                </div>

                <div className={this.props.selectedContent === 'economy' ? "nav-item nav-selected" : "nav-item"}  onClick={() => this.props.onChangeNav('economy')}>
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path fill="black" stroke="none" strokeWidth="0" strokeLinejoin="round" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13.41,18.09v0.58c0,0.73-0.6,1.33-1.33,1.33h-0.01   c-0.73,0-1.33-0.6-1.33-1.33v-0.6c-1.33-0.28-2.51-1.01-3.01-2.24c-0.23-0.55,0.2-1.16,0.8-1.16h0.24c0.37,0,0.67,0.25,0.81,0.6   c0.29,0.75,1.05,1.27,2.51,1.27c1.96,0,2.4-0.98,2.4-1.59c0-0.83-0.44-1.61-2.67-2.14c-2.48-0.6-4.18-1.62-4.18-3.67   c0-1.72,1.39-2.84,3.11-3.21v-0.6c0-0.73,0.6-1.33,1.33-1.33h0.01c0.73,0,1.33,0.6,1.33,1.33v0.62c1.38,0.34,2.25,1.2,2.63,2.26   c0.2,0.55-0.22,1.13-0.81,1.13h-0.26c-0.37,0-0.67-0.26-0.77-0.62c-0.23-0.76-0.86-1.25-2.12-1.25c-1.5,0-2.4,0.68-2.4,1.64   c0,0.84,0.65,1.39,2.67,1.91s4.18,1.39,4.18,3.91C16.52,16.76,15.15,17.76,13.41,18.09z" />
                    </svg>
                    <div className="nav-item-name">
                        economy
                    </div>
                </div>

                <div className={this.props.selectedContent === 'settings' ? "nav-item nav-selected" : "nav-item"}  onClick={() => this.props.onChangeNav('settings')} style={{top: "calc(100% - 160px)"}}>
                    <svg className="nav-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path fill="black" stroke="none" strokeWidth="0" strokeLinejoin="round" d="M19.43,12.98c0.04-0.32,0.07-0.64,0.07-0.98s-0.03-0.66-0.07-0.98l2.11-1.65c0.19-0.15,0.24-0.42,0.12-0.64l-2-3.46   c-0.12-0.22-0.39-0.3-0.61-0.22l-2.49,1c-0.52-0.4-1.08-0.73-1.69-0.98l-0.38-2.65C14.46,2.18,14.25,2,14,2h-4   C9.75,2,9.54,2.18,9.51,2.42L9.13,5.07C8.52,5.32,7.96,5.66,7.44,6.05l-2.49-1c-0.23-0.09-0.49,0-0.61,0.22l-2,3.46   C2.21,8.95,2.27,9.22,2.46,9.37l2.11,1.65C4.53,11.34,4.5,11.67,4.5,12s0.03,0.66,0.07,0.98l-2.11,1.65   c-0.19,0.15-0.24,0.42-0.12,0.64l2,3.46c0.12,0.22,0.39,0.3,0.61,0.22l2.49-1c0.52,0.4,1.08,0.73,1.69,0.98l0.38,2.65   C9.54,21.82,9.75,22,10,22h4c0.25,0,0.46-0.18,0.49-0.42l0.38-2.65c0.61-0.25,1.17-0.59,1.69-0.98l2.49,1   c0.23,0.09,0.49,0,0.61-0.22l2-3.46c0.12-0.22,0.07-0.49-0.12-0.64L19.43,12.98z M12,15.5c-1.93,0-3.5-1.57-3.5-3.5   s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.93,15.5,12,15.5z" />
                    </svg>
                    <div className="nav-item-name">
                        settings
                    </div>
                </div>


            </div>
        );
    }
}
