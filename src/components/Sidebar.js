import React, {Component} from "react";
import {connect} from 'react-redux';

import {Box, SearchField, Button} from 'gestalt';
import 'gestalt/dist/gestalt.css';

import data from '../store/btnLookup.json';

class Sidebar extends Component {
    state = {
        textInput: ''
    };

    showButton = rectangle => {
        if (this.state.textInput === '')
            return;
        else if (rectangle.name.startsWith(this.state.textInput))
            return <Box paddingX={2}><Button inline text={rectangle.name}
                                             onClick={() => this.props.addRect(rectangle.name, rectangle.color)}/></Box>
    };

    render() {
        const btnList = data.rectangles.map(rectangle => this.showButton(rectangle));
        return (
            <Box>
                <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
                    <Box flex="grow" paddingX={2}>
                        <SearchField
                            accessibilityLabel="Demo Search Field"
                            id="searchField"
                            onChange={({value}) => this.setState({textInput: value})}
                            placeholder="Search"
                            value={this.state.textInput}
                        />
                    </Box>
                </Box>
                <Box color="white" shape="rounded" padding={3} display="flex" direction="row"
                     alignItems="center">
                    {btnList}
                </Box>
            </Box>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({'type': 'ADD_RECT', 'name': name, 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(Sidebar);
