import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';

import './App.css';
import Canvas from './components/Canvas'
import Sidebar from './containers/Sidebar/Sidebar';
import Tools from './containers/Tools'

class App extends Component {
    render() {
        return (
            <Container>
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
