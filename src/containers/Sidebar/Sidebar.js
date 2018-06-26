import React, {Component} from "react";
import {connect} from 'react-redux';
import {Button, Col, Row} from 'reactstrap';

import data from '../../store/btnLookup.json';
import './Sidebar.css';

class Sidebar extends Component {
    state = {
        textInput: ''
    };

    showButton = button => {
        const txtIn = this.state.textInput.toLowerCase();
        const btnName = button.name.toLowerCase();
        if (btnName.startsWith(txtIn))
            return <Col xs="4" className="Button-Col"><Button
                onClick={() => this.props.addRect(button.name, button.color)}>{button.name}</Button></Col>
    };

    render() {
        const btnList = data.rectangles.map(rectangle => this.showButton(rectangle));
        return (
            <Row>
                {btnList}
            </Row>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({'type': 'ADD_RECT', 'name': name, 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(Sidebar);
