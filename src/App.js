import React, { Component } from 'react';
import './App.css';
import Apollo from './Apollo/Apollo';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

class App extends Component {
    render() {
        return (
            <Apollo>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Apollo>
        );
    }
}

export default App;
