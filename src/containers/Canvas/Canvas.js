import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer, Transformer} from "react-konva";
import axios from 'axios';

import ColoredRect from '../ColoredRect';
import Tool from '../Tool/Tool';
import './Canvas.css';

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

    onSubmitHandler = () => {
        const imgid = Math.random().toString(36).substr(2, 9);
        let imgURL = this.stageRef.getStage().toDataURL();
        imgURL = imgURL.replace('data:image/png;base64,', '');

        console.log(imgid);
        axios.post('http://127.0.0.1/flask/post', {imgid: imgid, imgdata: imgURL}).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    render() {
        const listRect = this.props.rectangles.map(rectangle =>
            <ColoredRect key={rectangle.objid} objectid={rectangle.objid} color={rectangle.color} x={rectangle.x}
                         y={rectangle.y}/>);
        return (
            <div>
                <Stage className="Stage" width={700} height={400} onClick={this.onClickHandler} ref={node => {
                    this.stageRef = node
                }}>
                    <Layer>
                        {listRect}
                        {this.props.showTrans ? <Transformer ref={node => {
                            this.transformer = node;
                        }}/> : null}

                    </Layer>
                </Stage>
                <Tool onSubmitHandler={this.onSubmitHandler}/>
            </div>
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