const update = require('immutability-helper');

const initialState = {
    rectangles: []
};

const reducer = (state = initialState, action) => {
    // console.log(state);
    let rect_name = null;
    switch (action.type) {
        case 'ADD_RECT':
            console.log(state);
            const objid = Math.random().toString(36).substr(2, 9);
            const new_rect = { objid: objid, color: action.color, x: 20, y: 20 };
            return {
                rectangles: update(state.rectangles, { $push: [new_rect] })
            };
        case 'LOCATION':
            rect_name = action.event.target.attrs.name;
            const new_x = action.event.target.attrs.x;
            const new_y = action.event.target.attrs.y;
            return {
                rectangles: updateState(state, rect_name, action.type, new_x, new_y)
            };
        case 'TRANSFORM':
            rect_name = action.event.target.attrs.name;
            const scale_x = action.event.target.attrs.scaleX;
            const scale_y = action.event.target.attrs.scaleY;
            return {
                rectangles: updateState(state, rect_name, action.type, scale_x, scale_y)
            };
        default:
            return state;

    }
};

const updateState = (state, rect_name, actionType, newX, newY) => {
    //Update x and y coordinate of selected rectangle
    const rect_index = state.rectangles.findIndex(function (rect) {
        return rect.objid === rect_name;
    });

    let updatedRect = null;

    switch (actionType) {
        case 'LOCATION':
            updatedRect = update(state.rectangles[rect_index], { x: { $set: newX }, y: { $set: newY } });
            break;
        default:
            updatedRect = update(state.rectangles[rect_index], { scaleX: { $set: newX }, scaleY: { $set: newY } });
    }

    //Return a new state
    return update(state.rectangles, {
        $splice: [[rect_index, 1, updatedRect]]
    });
};

export default reducer;