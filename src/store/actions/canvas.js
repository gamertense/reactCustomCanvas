import * as actionTypes from './actionTypes';

export const addRect = (name, color) => {
    return {
        type: actionTypes.ADD_RECT,
        name: name, color: color
    };
};