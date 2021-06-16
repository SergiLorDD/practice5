export const FETCH_WEEK_START = "FETCH_WEEK_START";
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const FETCH_WEEK_FAILURE = "FETCH_WEEK_FAILURE";

import {getWeekForecast} from '../api'
import { openDayDetails } from './day-forecast';

const fetchWeekStart = () => ({
    type: FETCH_WEEK_START
});

const fetchWeekSuccess = (weekForecast) => ({
    type: FETCH_WEEK_SUCCESS,
    payload: weekForecast
});

const fetchWeekFailure = e => ({
    type: FETCH_WEEK_FAILURE,
    payload: e
});

export const fetchWeekForecast = () => (dispatch, getState) => {
    dispatch(fetchWeekStart())
    getWeekForecast().then(response => {
        if(!Array.isArray(response)) throw new Error("response is not array")
        dispatch(fetchWeekSuccess(response))
        if(getState.selectedDt == null) {
            dispatch(openDayDetails(response[0].dt))
        }
    }).catch(error => {
        dispatch(fetchWeekFailure(error))
    })
};