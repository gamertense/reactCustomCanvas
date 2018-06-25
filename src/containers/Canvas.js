import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer} from "react-konva";
import {Transformer} from "react-konva";

import ColoredRect from './ColoredRect';

class Canvas extends Component {
    onClickRect = (e) => {
        const stage = this.transformer.getStage();
        const rectangle = stage.findOne('.' + e.target.attrs.name);
        this.transformer.attachTo(rectangle);
        this.transformer.getLayer().batchDraw();
    };

    render() {
        const listRect = this.props.rectangles.map(rectangle =>
            <ColoredRect key={rectangle.objid} objectid={rectangle.objid} color={rectangle.color} x={rectangle.x}
                         y={rectangle.y} onSelect={this.onClickRect}/>);
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {/*<ColoredRect name='rect1' color='red'*/}
                    {/*x={this.props.rectangles[0].x} y={this.props.rectangles[0].y}/>*/}
                    {/*<ColoredRect name='rect2' color='green'*/}
                    {/*x={this.props.rectangles[1].x} y={this.props.rectangles[1].y}/>*/}
                    {listRect}
                    <Transformer
                        ref={node => {
                            this.transformer = node;
                        }}
                    />
                </Layer>
            </Stage>
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles,
        selected_rect: state.selected
    }
};

export default connect(mapStateToProps)(Canvas);