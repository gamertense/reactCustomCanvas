import React, {Component} from "react";

import {Box, Column} from 'gestalt';
import 'gestalt/dist/gestalt.css';

import Canvas from './components/Canvas'
import Sidebar from './components/Sidebar';

class App extends Component {
    render() {
        return (
            <Box display="flex" direction="row" paddingY={2}>
                <Column span={3}>
                    <Box color="lightGray" padding={1}>
                        <Box color="white" paddingY={2}>
                            <Sidebar/>
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

export default App;
