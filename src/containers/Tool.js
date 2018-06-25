import React, {Component} from "react";
import {connect} from 'react-redux';

import {Container, IconButton} from 'gestalt';

class Tools extends Component {
    render() {
        return (
            <Container>
                <IconButton
                    accessibilityLabel="Love"
                    bgColor="lightGray"
                    icon="arrow-back"
                    iconColor="blue"
                    onClick={() => {
                        console.log('❤️')
                    }}
                />
                <IconButton
                    accessibilityLabel="Love"
                    bgColor="lightGray"
                    icon="arrow-forward"
                    iconColor="blue"
                    onClick={() => {
                        console.log('❤️')
                    }}
                />
                <IconButton
                    accessibilityLabel="Love"
                    bgColor="lightGray"
                    icon="cancel"
                    iconColor="blue"
                    onClick={this.props.clearCanvas}
                />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCanvas: () => dispatch({'type': 'CLEAR_CANVAS'})
    }
};

export default connect(null, mapDispatchToProps)(Tools);