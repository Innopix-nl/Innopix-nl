import {modelalertConstants } from '../_constants';

export const modelalertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: modelalertConstants.SUCCESS, message };
}

function error(message) {
    return { type: modelalertConstants.ERROR, message };
}

function clear() {
    return { type: modelalertConstants.CLEAR };
}