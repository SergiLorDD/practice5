import {
    FETCH_DAY_START,
    FETCH_DAY_SUCCESS,
    FETCH_DAY_FAILURE,
    CHANGE_SELECTED_DT } from "../actions/day-forecast";

const dayForecast = (state = {}, action) => {
    switch(action.type) {
        case FETCH_DAY_START:
            return Object.assign({}, state, {
                [action.dt]: { data: null, loading: true, error: false }
            });
        case FETCH_DAY_SUCCESS:
            return Object.assign({}, state, {
                [action.dayForecast.dt]: { data: action.dayForecast, loading: false, error: false }
            });
        case FETCH_DAY_FAILURE:
            return Object.assign({}, state, {
                [action.dt]: { data: null, loading: false, error: true }
            });
        default :
            return state
    }
};

const selectedDt = (state = null, action) => {
    if(action.type === CHANGE_SELECTED_DT) return action.payload
    return state;
};

export { dayForecast, selectedDt };
