import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import View from './components/Layout/Layout';

class App extends Component {
    render() {
        const publicPath = '/react/';
        return (
            <BrowserRouter basename={publicPath}>
                <Route exact path='/' component={View}/>
            </BrowserRouter>
        );
    }
}

export default App;
