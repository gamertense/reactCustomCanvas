import React, {Component} from "react";
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

import data from '../store/btnLookup.json';

class Sidebar extends Component {
    state = {
        textInput: ''
    };

    showButton = button => {
        const txtIn = this.state.textInput.toLowerCase();
        const btnName = button.name.toLowerCase();
        if (btnName.startsWith(txtIn))
            return <Button onClick={() => this.props.addRect(button.name, button.color)}>{button.name}</Button>
    };

    render() {
        const btnList = data.rectangles.map(rectangle => this.showButton(rectangle));
        return (
            <div>
                {btnList}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({'type': 'ADD_RECT', 'name': name, 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(Sidebar);
