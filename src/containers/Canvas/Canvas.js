import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer, Transformer} from "react-konva";
import axios from 'axios';
import * as actionCreators from '../../store/actions/index';

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
        this.props.setLoading(true);
        const imgid = Math.random().toString(36).substr(2, 9);
        let imgdata_base64 = this.stageRef.getStage().toDataURL();
        imgdata_base64 = imgdata_base64.replace('data:image/png;base64,', '');
        console.log(imgid);
        this.props.postData(imgid, imgdata_base64)
        // axios.post('http://localhost/flask/post', {imgid: imgid, imgdata: imgURL}).then(function (response) {
        //     console.log(response);
        //
        // }).catch(function (error) {
        //     alert(error);
        // });
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
        updateSelected: (name) => dispatch(actionCreators.updateSelected(name)),
        updateTransform: (action) => dispatch(actionCreators.updateTransform(action)),
        setLoading: (bool) => dispatch(actionCreators.setLoading(bool)),
        postData: (imgid, imgdata) => dispatch(actionCreators.postData(imgid, imgdata))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);