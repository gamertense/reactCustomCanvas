import React, { Component } from "react";
import { connect } from 'react-redux';

import Canvas from './containers/Canvas'
import data from './store/btnLookup.json';

class App extends Component {
    render() {
        return (
            <div>
                {data.rectangles.map(rectangle => <button onClick={() => this.props.addRect(rectangle.name,rectangle.color)}>{rectangle.name}</button>)}
                {/* <button onClick={() => this.props.addRect('blue')}>Blue</button> */}
                <Canvas />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({ 'type': 'ADD_RECT', 'name': name, 'color': color })
    }
};

export default connect(null, mapDispatchToProps)(App);
