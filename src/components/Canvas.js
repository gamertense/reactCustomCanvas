import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer, Transformer} from "react-konva";

import ColoredRect from '../containers/ColoredRect';


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.tr = <Transformer
            ref={node => {
                this.transformer = node;
            }}
        />
    }

    onClickHandler = (e) => {
        // console.log(this.transformer);
        // console.log(e.target);
        switch (e.target.nodeType) {
            case 'Stage':
                break;
            case 'Shape':
                const stage = this.transformer.getStage();
                const rectangle = stage.findOne('.' + e.target.attrs.name);
                this.transformer.attachTo(rectangle);
                this.transformer.getLayer().batchDraw();
                break;
            default:
                break;
        }
    };

    render() {
        const listRect = this.props.rectangles.map(rectangle =>
            <ColoredRect key={rectangle.objid} objectid={rectangle.objid} color={rectangle.color} x={rectangle.x}
                         y={rectangle.y}/>);
        const style = {background: 'white'};
        return (
            <Stage width={700} height={400} onClick={this.onClickHandler} style={style}>
                <Layer ref={node => {
                    this.layer = node;
                }}>
                    {listRect}
                    {this.tr}
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