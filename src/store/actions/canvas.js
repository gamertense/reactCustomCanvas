import * as actionTypes from './actionTypes';

export const addRectAfterWait = () => {
    console.log('adf');
};

export const addRect = (name, color) => {
    // return (dispatch) => {
    //     setTimeout(() => {
    //         dispatch(addRectAfterWait())
    //     }, 2000);
    // };

    return {
        type: actionTypes.ADD_RECT,
        name: name, color: color
    };
};

export const location = () => {
    return {type: actionTypes.LOCATION};
};

export const transf = () => {
    return {type: actionTypes.TRANSFORM};
};

export const updateSelected = (name) => {
    return {
        type: actionTypes.UPDATE_SELECTED,
        name: name
    };
};

export const updateTransform = (action) => {
    return {
        type: actionTypes.UPDATE_TRANSFORM,
        action: action
    };
};

export const remov = () => {
    return {type: actionTypes.REMOVE};
};

export const clearCanvas = () => {
    return {type: actionTypes.CLEAR_CANVAS};
};

export const setLoading = (bool) => {
    return {
        type: actionTypes.SET_LOADING,
        bool: bool
    };
};