import { combineReducers } from "redux";

import { dayForecast, selectedDt } from "./day-forecast";
import { weekForecast, weekLoading, weekError } from "./week-forecast";
import { errorLogger } from "./error-logger";

export default combineReducers({
    dayForecast,
    selectedDt,
    weekForecast,
    weekLoading,
    weekError,
    errorLogger
});
