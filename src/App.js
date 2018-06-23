import React, {Component} from "react";

import Canvas from './containers/Canvas'

class App extends Component {
    render() {
        return (
            <div>
                <button>Blue</button>
                <Canvas/>
            </div>
        );
    }
}

export default App;
