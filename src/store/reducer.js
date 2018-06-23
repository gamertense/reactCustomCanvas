const initialState = {
    rectangles: [
        {
            name: 'rect1',
            x: 50,
            y: 50
        },
        {
            name: 'rect2',
            x: 20,
            y: 20
        }
    ]
};

const reducer = (state = initialState, action) => {
    let rect_name = null;
    switch (action.type) {
        case 'LOCATION':
            rect_name = action.event.target.attrs.name;
            const new_x = action.event.target.attrs.x;
            const new_y = action.event.target.attrs.y;
            // console.log(state);
            return {
                rectangles: updateState(state, rect_name, action.type, new_x, new_y)
            };
        case 'TRANSFORM':
            rect_name = action.event.target.attrs.name;
            const scale_x = action.event.target.attrs.scaleX;
            const scale_y = action.event.target.attrs.scaleY;
            return {
                rectangles: updateState(state, rect_name, action.type, scale_x, scale_y)
            }

    }
    return state;
};

const updateState = (state, rect_name, actionType, newX, newY) => {
    //Update x and y coordinate of selected rectangle
    const update = require('immutability-helper');
    const rect_index = state.rectangles.findIndex(function (rect) {
        return rect.name === rect_name;
    });

    let updatedRect = null;
    if (actionType === 'LOCATION')
        updatedRect = update(state.rectangles[rect_index], {x: {$set: newX}, y: {$set: newY}});
    else
        updatedRect = update(state.rectangles[rect_index], {scaleX: {$set: newX}, scaleY: {$set: newY}});

    //Return a new state
    return update(state.rectangles, {
        $splice: [[rect_index, 1, updatedRect]]
    });
};

export default reducer;