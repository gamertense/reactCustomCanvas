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
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOCATION') {
        const rect_name = action.event.target.attrs.name;
        // let selected_rect = state.filter(rect => rect.name == rect_name)
        const new_x = action.event.target.attrs.x;
        const new_y = action.event.target.attrs.y;
        console.log(new_x + ' ' + new_y);

        //Update x and y coordinate of selected rectangle
        let update = require('immutability-helper');
        let rect_index = state.rectangles.findIndex(function (rect) {
            return rect.name === rect_name;
        });
        let updatedRect = update(state.rectangles[rect_index], { x: { $set: new_x }, y: { $set: new_y } });
        let newstate = update(state.rectangles, {
            $splice: [[rect_index, 1, updatedRect]]
        });

        console.log(newstate);
        return {
            rectangles: newstate
        }
    }
    return state;
}

export default reducer;