import React, {Component} from "react";
import {connect} from 'react-redux';
import {Button, Col, Row} from 'reactstrap';

import data from '../../store/btnLookup.json';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
    }

    state = {
        textInput: ''
    };

    showButton = button => {
        this.count += 1;
        if (this.count >= 15)
            return;

        const txtIn = this.state.textInput.toLowerCase();
        const btnName = button.name.toLowerCase();
        const style = {background: button.color};
        if (btnName.startsWith(txtIn))
            return <Col xs="6" className="Button-Col"><Button style={style}
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
