import React, {Component} from "react";
import {connect} from 'react-redux';
import {Stage, Layer, Divider} from "react-konva";
import {Transformer} from "react-konva";

import ColoredRect from '../containers/ColoredRect';
import Tools from "../containers/Tools";


class Canvas extends Component {
    onClickHandler = (e) => {
        console.log('onClearHandler');
        console.log(e.target);
        switch (e.target.nodeType) {
            case 'Stage':
                break;
            case 'Shape':
                const stage = this.transformer.getStage();
                const rectangle = stage.findOne('.' + e.target.attrs.name);
                this.transformer.attachTo(rectangle);
                this.transformer.getLayer().batchDraw();
                break;
        }
    };

    render() {
        const listRect = this.props.rectangles.map(rectangle =>
            <ColoredRect key={rectangle.objid} objectid={rectangle.objid} color={rectangle.color} x={rectangle.x}
                         y={rectangle.y} />);
        return (
            <div>
                <Stage width={800} height={500} onClick={this.onClickHandler}>
                    <Layer>
                        {listRect}
                        <Transformer
                            ref={node => {
                                this.transformer = node;
                            }}
                        />
                    </Layer>
                </Stage>
                {/*<Tools onClearHandler={} />*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rectangles: state.rectangles
    }
};

export default connect(mapStateToProps)(Canvas);