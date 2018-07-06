import React, {Component} from "react";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faTrash, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import {connect} from "react-redux";
import {Button} from 'reactstrap';
import {ClipLoader} from 'react-spinners';
import * as actionCreators from '../../store/actions/index';

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
        library.add(faEraser);
        library.add(faTrash);
        library.add(faPaperPlane);
        return (
            <div className="Tool">
                <Button className="Button" color="warning" onClick={() => this.onBtnClick('remove')}><FontAwesomeIcon
                    icon="eraser"/> Remove</Button>
                <Button className="Button" color="danger" onClick={() => this.onBtnClick('clear')}><FontAwesomeIcon
                    icon="trash"/> Clear Canvas</Button>
                <Button className="float-right" color="success" onClick={this.props.onSubmitHandler}><FontAwesomeIcon
                    icon="paper-plane"/> Submit <ClipLoader
                    size={18}
                    color={'#80ea6b'}
                    loading={this.props.ld}
                /></Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ld: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        remove: () => dispatch(actionCreators.remov()),
        clearCanvas: () => dispatch(actionCreators.clearCanvas()),
        updateTransform: (action) => dispatch(actionCreators.updateTransform(action))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tool);