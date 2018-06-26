import React, {Component} from "react";
import {connect} from 'react-redux';

import {Box, Column, Button} from 'gestalt';
import 'gestalt/dist/gestalt.css';

import Canvas from './components/Canvas'
import data from './store/btnLookup.json';

class App extends Component {
    render() {
        const btnList = data.rectangles.map(rectangle => <Button inline text={rectangle.name}
                                                                 onClick={() => this.props.addRect(rectangle.name, rectangle.color)}/>);
        return (
            <Box display="flex" direction="row" paddingY={2}>
                <Column span={3}>
                    <Box color="lightGray" padding={1}>
                        <Box color="white" paddingY={2}>

                            {btnList}
                        </Box>
                    </Box>
                </Column>
                <Column span={9}>
                    <Box color="lightGray" padding={1}>
                        <Box color="white" paddingY={2}>
                            <Canvas/>
                        </Box>
                    </Box>
                </Column>
            </Box>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({'type': 'ADD_RECT', 'name': name, 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(App);
