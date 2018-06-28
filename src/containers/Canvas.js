import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer, Transformer} from "react-konva";

import ColoredRect from './ColoredRect';


class Canvas extends Component {
    onClickHandler = (e) => {
        const stage = this.transformer.getStage();
        switch (e.target.nodeType) {
            case 'Stage':
                this.props.updateTransform('remove');
                this.props.updateTransform('add');
                break;
            case 'Shape':
                const rectangle = stage.findOne('.' + e.target.attrs.name);
                this.transformer.attachTo(rectangle);
                this.transformer.getLayer().batchDraw();
                this.props.updateSelected(e.target.attrs.name);
                break;
            default:
                console.log('Unhandled target');
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
                <Layer>
                    {listRect}
                    {this.props.showTrans ? <Transformer ref={node => {
                        this.transformer = node;
                    }}/> : null}

                </Layer>
            </Stage>
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles,
        sobj: state.selectedObj,
        showTrans: state.showTransformer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateSelected: (name) => dispatch({'type': 'UPDATE_SELECT', 'name': name}),
        updateTransform: (action) => dispatch({'type': 'UPDATE_TRANSFORM', 'action': action})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);