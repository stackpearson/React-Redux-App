import {
    FETCHING_STARTED,
    FETCHING_SUCCEEDED,
    FETCHING_FAILED
} from '../actions/globalActions';

export const initialState = {
    globalCases: [],
    isFetching: false,
    error: ''
};

export const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_STARTED:
            return {
                ...state,
                isFetching: true
            };

        case FETCHING_SUCCEEDED:
            return {
                ...state,
                isFetching: false,
                globalCases: action.payload
            };

        case FETCHING_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};