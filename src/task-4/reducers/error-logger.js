import { FETCH_DAY_FAILURE } from "../actions/day-forecast";
import { DELETE_ERROR } from "../actions/error-logger";
import { FETCH_WEEK_FAILURE } from "../actions/week-forecast";

export const errorLogger = (state = [], action) => {
    if(action.type === FETCH_WEEK_FAILURE)
        return [...state, {id: new Date(), message: action.payload.message}];
    if(action.type === FETCH_DAY_FAILURE)
        return [...state, {id: action.dt, message: action.error}];
    if(action.type === DELETE_ERROR)
        return state.filter(error => error.id !== action.payload);
    return state
};