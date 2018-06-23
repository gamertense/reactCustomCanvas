import React, {Component} from "react";
import {connect} from 'react-redux';

import Canvas from './containers/Canvas'

class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.addRect('blue')}>Blue</button>
                <Canvas/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (color) => dispatch({'type': 'ADD_RECT', 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(App);
