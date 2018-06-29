import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';

import './View.css';
import Canvas from '../../containers/Canvas'
import Sidebar from '../../containers/Sidebar/Sidebar';
import Tools from '../../containers/Tool/Tool'

class App extends Component {
    render() {
        return (
            <Container className="App-container" fluid>
                <Row>
                    <Col xs="4" className="Sidebar">
                        <Sidebar/>
                    </Col>
                    <Col xs="8" className="Canvas">
                        <Canvas/>
                        <Tools/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
