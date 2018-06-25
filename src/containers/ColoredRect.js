import React, {Component} from "react";
import {Rect} from "react-konva";
import {connect} from 'react-redux';

class ColoredRect extends Component {
    render() {
        // console.log(this.props.name );
        return (
            <Rect
                name={this.props.objectid}
                x={this.props.x}
                y={this.props.y}
                width={50}
                height={50}
                fill={this.props.color}
                onClick={this.props.onSelect}
                onDragEnd={this.props.updateLocation}
                onTransformEnd={this.props.updateScale}
                draggable
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLocation: (e) => dispatch({'type': 'LOCATION', 'event': e}),
        updateScale: (e) => dispatch({'type': 'TRANSFORM', 'event': e}),
    }
};

export default connect(null, mapDispatchToProps)(ColoredRect);