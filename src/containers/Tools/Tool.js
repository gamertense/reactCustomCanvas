import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from 'reactstrap';

import './Tool.css';

class Tool extends Component {
    render() {
        return (
            <div className="Tool">
                <Button className="Button" color="warning" onClick={this.props.remove}><i
                    className="fas fa-eraser"></i> Remove</Button>
                <Button className="Button" color="danger" onClick={this.props.clearCanvas}><i
                    className="fas fa-trash-alt"></i> Clear Canvas</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove: () => dispatch({'type': 'REMOVE'}),
        clearCanvas: () => dispatch({'type': 'CLEAR_CANVAS'})
    }
};

export default connect(null, mapDispatchToProps)(Tool);