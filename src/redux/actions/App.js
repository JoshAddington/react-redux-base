import fetch from 'isomorphic-fetch';
import _ from 'underscore';
import * as types from 'constants/ActionTypes';

function requestContent(){
    return {
        type: types.APP_REQUEST,
    };
}

function receiveObject(item){
    return {
        type: types.APP_RECEIVE_OBJECT,
        item,
    };
}


export function fetchObjectIfNeeded(id){
    return (dispatch, getState) => {
        let state = getState();
        if (state.app.isFetching) return;
        dispatch(requestContent());
        return fetch(h.getAssessmentApiUrl(state.config), h.fetchGet)
            .then((response) => response.json())
            .then((json) => dispatch(receiveObject(json)))
            .catch((ex) => console.error('Assessment parsing failed', ex));
    };
}
