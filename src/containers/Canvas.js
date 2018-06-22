import React, { Component } from "react";
import { Rect } from "react-konva";
import { connect } from 'react-redux';

import ColoredRect from './ColoredRect'

class Canvas extends Component {
    onDragEndHandler = (e) => {
        console.log(e.target);
    }
    render() {
        return (
            <ColoredRect name='rect1' color='red'
                x={this.props.rectangles[0].x} y={this.props.rectangles[0].y}
                onDragEnd={this.props.updateLocation} />
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLocation: (e) => dispatch({ 'type': 'LOCATION', 'event': e })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);