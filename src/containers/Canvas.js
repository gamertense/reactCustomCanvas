import React, { Component } from "react";
import { connect } from 'react-redux';
import { Stage, Layer } from "react-konva";

import ColoredRect from './ColoredRect'

class Canvas extends Component {
    onDragEndHandler = (e) => {
        console.log(e.target);
    }
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <ColoredRect name='rect1' color='red'
                        x={this.props.rectangles[0].x} y={this.props.rectangles[0].y} />
                    <ColoredRect name='rect2' color='green'
                        x={this.props.rectangles[1].x} y={this.props.rectangles[1].y} />
                </Layer>
            </Stage>
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles
    }
}

export default connect(mapStateToProps)(Canvas);