import React, { Component } from 'react';

import './nativize.css';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends Component {
    
    state = {
        selectedContent: 'home',
    }


    changeSelectedContent(newContent) {
        this.setState({selectedContent: newContent});
    }



    render() {
        return (
            <div className="App">
                <Navbar onChangeNav={newContent => this.changeSelectedContent(newContent)} selectedContent={this.state.selectedContent}/>
                <Content selectedContent={this.state.selectedContent}/>
            </div>
        );
    }
}

export default App;
