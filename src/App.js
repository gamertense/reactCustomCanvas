import React, {Component} from "react";
// import Konva from "konva";
// import { render } from "react-dom";
import {Transformer} from "react-konva";

import Canvas from './containers/Canvas'

class App extends Component {
    render() {
        return (
            <div>
                <Canvas/>
            </div>
        );
    }
}

export default App;
