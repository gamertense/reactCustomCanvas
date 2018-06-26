import React, {Component} from "react";

import {Container, Row, Col} from 'reactstrap';

import Canvas from './components/Canvas'
import Sidebar from './components/Sidebar';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="3">
                        <Sidebar/>
                    </Col>
                    <Col xs="9"><Canvas/></Col>
                </Row>
            </Container>
        );
    }
}

export default App;
