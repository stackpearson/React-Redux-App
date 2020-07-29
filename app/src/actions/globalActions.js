import axios from 'axios';

export const FETCHING_STARTED = 'FETCHING_STARTED';
export const FETCHING_SUCCEEDED = 'FETCHING_SUCCEEDED';
export const FETCHING_FAILED = 'FETCHING_FAILED';

export const fetchGlobalCases = () => dispatch => {
    dispatch ({ type: FETCHING_STARTED});
    axios
        .get('https://api.covid19api.com/summary')
        .then(res => {
            console.log('global call', res);
            dispatch ({
                type: FETCHING_SUCCEEDED,
                payload: res
            });
        })
        .catch(err => {
            console.error('pulling cases failed', err.message);
            dispatch({ type: FETCHING_FAILED, payload: err.message });
        });
       
};