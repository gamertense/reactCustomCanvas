import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addRect = (name, color) => {
    return {
        type: actionTypes.ADD_RECT,
        name: name, color: color
    };
};

export const remov = () => {
    return {
        type: actionTypes.REMOVE,
    };
};

export const clearCanvas = () => {
    return {
        type: actionTypes.CLEAR_CANVAS,
    };
};

export const updateLocation = (e) => {
    return {
        type: actionTypes.UPDATE_LOCATION,
        event: e
    };
};

export const updateTransform = (action) => {
    return {
        type: actionTypes.UPDATE_TRANSFORM,
        action: action
    }
};

export const updateSelected = (name) => {
    return {
        type: actionTypes.UPDATE_SELECTED,
        name: name
    };
};

export const updateTooltip = (btnName, clientX, clientY) => {
    return {
        type: actionTypes.UPDATE_TOOLTIP,
        btnName: btnName,
        clientX: clientX,
        clientY: clientY
    };
};

export const setLoading = (bool) => {
    return {
        type: actionTypes.SET_LOADING,
        bool: bool
    };
};

export const postData = (imgid, imgdata) => {
    return dispatch => {
        axios.post('http://127.0.0.1/flask/post', {
            imgid: imgid,
            imgdata: imgdata,
            imgtype: 'color'
        }).then((response) => {
            console.log(response);
            dispatch(setLoading(false));
        }).catch(error => {
            alert(error);
        });
    }
};
