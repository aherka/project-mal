import React, { Component } from 'react';

import './Content.css'
import HomeScreen from '../HomeScreen';
import ResidentsScreen from '../ResidentsScreen';
import EconomyScreen from '../EconomyScreen';
import SettingsScreen from '../SettingsScreen';

export default class Content extends Component {
    render() {
        switch (this.props.selectedContent) {
            case 'home':
                return(
                    <div className='Content'>
                    <HomeScreen />
                    </div>
                );
            case 'residents':
                return(
                    <div className='Content'>
                    <ResidentsScreen />
                    </div>
                );
            case 'economy':
                return(
                    <div className='Content'>
                    <EconomyScreen />
                    </div>
                );
            case 'settings':
                return(
                    <div className='Content'>
                    <SettingsScreen />
                    </div>
                );        
            default:
                return(
                    <div className='Content'>error</div>
                );
        }
    }
}
