import React, {Component} from "react"
import {connect} from 'react-redux'
import {Button, Col, Row, Container, Input} from 'reactstrap'

import data from '../../store/btnLookup.json'
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            textInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    showButton = button => {
        this.count += 1;
        if (this.count >= 15)
            return;

        const txtIn = this.state.textInput.toLowerCase();
        const btnid = Math.random().toString(36).substr(2, 9);
        const btnName = button.name.toLowerCase();
        const style = { borderColor: button.color };
        if (btnName.startsWith(txtIn))
            return <Col xs="12" md="6" className="Button-Col" key={btnid}><Button style={style} outline 
                onClick={() => this.props.addRect(button.name, button.color)}>{button.name}</Button></Col>
    };

    handleChange(event) {
        this.count = 0;
        this.setState({textInput: event.target.value});
    }

    render() {
        const btnList = data.rectangles.map(rectangle => this.showButton(rectangle));
        return (
            <Container className="Sidebar-container">
                <Input placeholder="Search" onChange={this.handleChange} value={this.state.textInput}/>
                <Row>
                    {btnList}
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRect: (name, color) => dispatch({'type': 'ADD_RECT', 'name': name, 'color': color})
    }
};

export default connect(null, mapDispatchToProps)(Sidebar);
