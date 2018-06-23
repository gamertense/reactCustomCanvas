const initialState = {
    rectangles: [
        {
            name: 'rect1', color: 'red',
            x: 50, y: 50
        },
        {
            name: 'rect2', color: 'green',
            x: 20, y: 20
        }
    ],
    selected: 'rect1'
};

const reducer = (state = initialState, action) => {
    console.log(state);
    let rect_name = null;
    switch (action.type) {
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
        case 'SELECTED_RECT':
            rect_name = action.event.target.attrs.name;
            return {
                ...state,
                selected: rect_name
            };
        default:
            return state;

    }
};

const updateState = (state, rect_name, actionType, newX, newY) => {
    //Update x and y coordinate of selected rectangle
    const update = require('immutability-helper');
    const rect_index = state.rectangles.findIndex(function (rect) {
        return rect.name === rect_name;
    });

    let updatedRect = null;

    switch (actionType) {
        case 'LOCATION':
            updatedRect = update(state.rectangles[rect_index], {x: {$set: newX}, y: {$set: newY}});
            break;
        default:
            updatedRect = update(state.rectangles[rect_index], {scaleX: {$set: newX}, scaleY: {$set: newY}});
    }

    //Return a new state
    return update(state.rectangles, {
        $splice: [[rect_index, 1, updatedRect]]
    });
};

export default reducer;