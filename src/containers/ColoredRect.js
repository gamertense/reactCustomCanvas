import React, {Component} from "react";
import {Rect} from "react-konva";
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'

class ColoredRect extends Component {
    onMouseHover = (e) => {
        this.props.updateHoveredObj(e.target.attrs.btnName);
        console.log(e.target.attrs);
    };

    render() {
        return (
            <Rect
                btnName={this.props.btnName}
                name={this.props.objectid}
                x={this.props.x}
                y={this.props.y}
                width={50}
                height={50}
                fill={this.props.color}
                onDragEnd={this.props.updateLocation}
                onMouseOver={this.onMouseHover}
                draggable
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLocation: (e) => dispatch(actionCreators.updateLocation(e)),
        updateHoveredObj: (e) => dispatch(actionCreators.updateHoveredObj(e))
    }
};

export default connect(null, mapDispatchToProps)(ColoredRect);