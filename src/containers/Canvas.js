import React, { Component } from "react";
import { connect } from 'react-redux';

import ColoredRect from './ColoredRect'

class Canvas extends Component {
    onDragEndHandler = (e) => {
        console.log(e.target);
    }
    render() {
        return (
            <ColoredRect name='rect1' color='red'
                x={this.props.rectangles[0].x} y={this.props.rectangles[0].y} />
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles
    }
}

export default connect(mapStateToProps)(Canvas);