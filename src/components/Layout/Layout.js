import React from "react";
import {Container, Row, Col} from 'reactstrap';

import './Layout.css';
import Canvas from '../../containers/Canvas/Canvas'
import Sidebar from '../../containers/Sidebar/Sidebar';

const layout = () => (
    <Container className="App-container" fluid>
        <Row>
            <Col xs="4" className="Sidebar">
                <Sidebar/>
            </Col>
            <Col xs="8" className="Canvas">
                <Canvas/>
            </Col>
        </Row>
    </Container>
);

export default layout;
