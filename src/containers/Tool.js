import React, {Component} from "react";
import {connect} from 'react-redux';

import {Box, Column, IconButton} from 'gestalt';

class Tools extends Component {
    render() {
        return (
            <Box color="lightGray" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
                <Box paddingX={2}>
                    <IconButton
                        accessibilityLabel="Love"
                        bgColor="white"
                        icon="arrow-back"
                        iconColor="blue"
                        onClick={() => {
                            console.log('❤️')
                        }}
                    />
                </Box>
                <Box paddingX={2}>
                    <IconButton
                        accessibilityLabel="Love"
                        bgColor="white"
                        icon="arrow-forward"
                        iconColor="blue"
                        onClick={() => {
                            console.log('❤️')
                        }}
                    />
                </Box>
                <Box paddingX={2}>
                    <IconButton
                        accessibilityLabel="Love"
                        bgColor="white"
                        icon="cancel"
                        iconColor="blue"
                        onClick={this.props.clearCanvas}
                    />
                </Box>
            </Box>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCanvas: () => dispatch({'type': 'CLEAR_CANVAS'})
    }
};

export default connect(null, mapDispatchToProps)(Tools);