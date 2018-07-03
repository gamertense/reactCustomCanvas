import * as actionTypes from './actionTypes';

export const addRect = (name, color) => {
    return {
        type: actionTypes.ADD_RECT,
        name: name, color: color
    };
};

export const updateLocation = (e) => {
    return {
        type: actionTypes.UPDATE_LOCATION,
        event: e
    };
};

export const updateScale = (e) => {
    return {
        type: actionTypes.UPDATE_SCALE,
        event: e
    };
};

export const updateSelected = (name) => {
    return {
        type: actionTypes.UPDATE_SELECTED,
        name: name
    };
};