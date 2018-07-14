import React, {Component} from "react";
import {connect} from 'react-redux';
import {Label, Tag, Text} from 'react-konva';

class Tooltip extends Component {
    render() {
        return (
            <Label x={this.props.tooltip.clientX}
                   y={this.props.tooltip.clientY}
                   opacity={0.75}>
                <Tag fill='black'
                     pointerDirection='down'
                     pointerWidth={10}
                     pointerHeight={10}
                     lineJoin='round'
                     shadowColor='black'
                     shadowBlur={10}
                     shadowOffset={10}
                     shadowOpacity={0.5}/>
                <Text text={this.props.tooltip.btnName}
                      fontFamily='Calibri'
                      fontSize={18}
                      padding={5}
                      fill='white'/>
            </Label>
        );
    }
}

const mapStateToProps = state => {
    return {
        tooltip: state.tooltip,
    }
};

export default connect(mapStateToProps)(Tooltip);