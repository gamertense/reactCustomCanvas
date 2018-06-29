import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from 'reactstrap';

import './Tool.css';

class Tool extends Component {
    onBtnClick = action => {
        this.props.updateTransform('remove');
        this.props.updateTransform('add');

        if (action === 'remove')
            this.props.remove();
        else
            this.props.clearCanvas();
    };

    render() {
        return (
            <div className="Tool">
                <Button className="Button" color="warning" onClick={() => this.onBtnClick('remove')}><i
                    className="fas fa-eraser"></i> Remove</Button>
                <Button className="Button" color="danger" onClick={() => this.onBtnClick('clear')}><i
                    className="fas fa-trash-alt"></i> Clear Canvas</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove: () => dispatch({'type': 'REMOVE'}),
        clearCanvas: () => dispatch({'type': 'CLEAR_CANVAS'}),
        updateTransform: (action) => dispatch({'type': 'UPDATE_TRANSFORM', 'action': action})
    }
};

export default connect(null, mapDispatchToProps)(Tool);