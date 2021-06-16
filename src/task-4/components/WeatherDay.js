import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openDayDetails } from "../actions/day-forecast";

const WeatherDay = ({ day, selectedDt, openDayDetails }) => {
    const handleDayClick = () => {
        openDayDetails(day.dt);
    };

    return (
        <li
            className={
                selectedDt == day.dt
                    ? "list-inline-item active"
                    : "list-inline-item"
            }
            onClick={handleDayClick}
        >
            <div className="day-name">
                {new Date(day.dt).toDateString().slice(0, 3)}
            </div>
            <img
                src={`img/${day.weather.icon}.png`}
                alt={day.weather.description}
            />
            <div className="temp">
                {day.temp.min}&#x2103; {day.temp.max}&#x2103;
            </div>
        </li>
    );
};

const mapStateToProps = (state) => ({
    selectedDt: state.selectedDt,
});
const mapDispatchToProps = { openDayDetails };

WeatherDay.propTypes = {
    selectedDt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    openDayDetails: PropTypes.func,
    day: PropTypes.shape({
        dt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        temp: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
        }),
        weather: PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
        }),
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
