import {
    FETCH_WEEK_START,
    FETCH_WEEK_SUCCESS,
    FETCH_WEEK_FAILURE } from "../actions/week-forecast";

const weekForecast = (state = [], action) => {
    if(action.type === FETCH_WEEK_SUCCESS)
        return [...action.payload];
    return state
};

const weekLoading = (state = false, action) => {
    if(action.type === FETCH_WEEK_START)
        return true;
    if(action.type === FETCH_WEEK_SUCCESS)
        return false;
    if(action.type === FETCH_WEEK_FAILURE)
        return false;
    return state
};

const weekError = (state = false, action) => {
    if(action.type === FETCH_WEEK_FAILURE)
        return true;
    if(action.type === FETCH_WEEK_SUCCESS)
        return false;
    if(action.type === FETCH_WEEK_START)
        return false;
    return state
};

export { weekForecast, weekLoading, weekError };
