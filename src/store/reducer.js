import * as actionTypes from './actions/actionTypes';

const update = require('immutability-helper');

const initialState = {
    rectangles: [],
    selectedObj: '',
    hoveredObj: '',
    showTransformer: true,
    loading: false
};

const reducer = (state = initialState, action) => {
    let rect_name = null;
    switch (action.type) {
        case actionTypes.ADD_RECT:
            const objid = Math.random().toString(36).substr(2, 9);
            const new_rect = {objid: objid, color: action.color, x: Math.random() * 100, y: Math.random() * 100};
            return {
                ...state,
                rectangles: update(state.rectangles, {$push: [new_rect]})
            };
        case actionTypes.UPDATE_LOCATION:
            rect_name = action.event.target.attrs.name;
            const new_x = action.event.target.attrs.x;
            const new_y = action.event.target.attrs.y;
            return {
                ...state,
                rectangles: updateState(state, rect_name, action.type, new_x, new_y)
            };
        case actionTypes.UPDATE_SELECTED:
            return {
                ...state,
                selectedObj: action.name
            };
        case actionTypes.UPDATE_HOVER:
            return {
                ...state,
                hoveredObj: action.name
            };
        case actionTypes.REMOVE:
            const rect_index = state.rectangles.findIndex(rect => {
                return rect.objid === state.selectedObj;
            });
            return update(state, {
                rectangles: {
                    $splice: [[rect_index, 1]]
                }
            });

        case actionTypes.CLEAR_CANVAS:
            return {...state, rectangles: []};
        case actionTypes.UPDATE_TRANSFORM:
            switch (action.action) {
                case 'remove':
                    return {...state, showTransformer: false};
                default:
                    return {...state, showTransformer: true};
            }
        case actionTypes.SET_LOADING:
            return {...state, loading: action.bool};
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