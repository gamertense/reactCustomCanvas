import React, { Component } from "react";
// import Konva from "konva";
// import { render } from "react-dom";
import { Stage, Layer, Transformer } from "react-konva";

import ColoredRect from './containers/ColoredRect'

class Handler extends React.Component {
  componentDidMount() {
    // not really "react-way". But it works.
    const stage = this.transformer.getStage();
    const rectangle = stage.findOne('.' + this.props.rectName);
    this.transformer.attachTo(rectangle);
    this.transformer.getLayer().batchDraw();
  }
  render() {
    return (
      <Transformer
        ref={node => {
          this.transformer = node;
        }}
      />
    );
  }
}

class App extends Component {
  state = {
    rectName: 'rect1'
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <ColoredRect name="rect1" color='red' />
          <ColoredRect name="rect2" color='green' />
          <Handler rectName={this.state.rectName} />
        </Layer>
      </Stage>
    );
  }
}

export default App;
