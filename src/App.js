import React, { Component } from "react";
// import Konva from "konva";
// import { render } from "react-dom";
import { Transformer } from "react-konva";

import Canvas from './containers/Canvas'

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
  render() {
    return (
      <Canvas />
    );
  }
}

export default App;
