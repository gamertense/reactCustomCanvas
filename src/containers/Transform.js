import React from "react";
import {Transformer} from "react-konva";

class Transform extends React.Component {
    componentDidMount() {
        // not really "react-way". But it works.
        const stage = this.transformer.getStage();
        const rectangle = stage.findOne('.' + 'rect1');
        this.transformer.attachTo(rectangle);
        this.transformer.getLayer().batchDraw();
    }

    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}

export default Transform;