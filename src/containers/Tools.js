import React, {Component} from "react";
import {connect} from "react-redux";

class Tools extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.remove}>Remove</button>
                <button onClick={this.props.clearCanvas}>Clear</button>
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

export default connect(null, mapDispatchToProps)(Tools);