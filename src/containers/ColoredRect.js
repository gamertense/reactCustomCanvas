import React, { Component } from "react";
import { Rect } from "react-konva";
import { connect } from 'react-redux';

class ColoredRect extends Component {
  state = {
    x: 20,
    y: 20
  }

  handleTransform = () => {
    // console.log("transformed");
    // we can read attrs here and send them to store
  };

  clickHandler = (e) => {
    this.setState({ x: e.target.attrs.x, y: e.target.attrs.y });
    console.log("Rect name: " + this.props.name + " x: " + this.state.x + " y: " + this.state.y);
  }

  render() {
    // console.log(this.props.name );
    return (
      <Rect
        name={this.props.name}
        x={this.props.x}
        y={this.props.y}
        width={50}
        height={50}
        fill={this.props.color}
        onDragEnd={this.props.updateLocation}
        onTransform={this.handleTransform}
        draggable
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      updateLocation: (e) => dispatch({ 'type': 'LOCATION', 'event': e })
  }
}

export default connect(null, mapDispatchToProps)(ColoredRect);