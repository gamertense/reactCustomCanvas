import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer} from "react-konva";

import ColoredRect from './ColoredRect';
import Transform from './Transform';

class Canvas extends Component {
    render() {
        const listRect = this.props.rectangles.map(rectangle =>
            <ColoredRect name={rectangle.name} color={rectangle.color} x={rectangle.x} y={rectangle.y}/>);
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {/*<ColoredRect name='rect1' color='red'*/}
                    {/*x={this.props.rectangles[0].x} y={this.props.rectangles[0].y}/>*/}
                    {/*<ColoredRect name='rect2' color='green'*/}
                    {/*x={this.props.rectangles[1].x} y={this.props.rectangles[1].y}/>*/}
                    {listRect}
                    <Transform/>
                </Layer>
            </Stage>
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles
    }
};

export default connect(mapStateToProps)(Canvas);