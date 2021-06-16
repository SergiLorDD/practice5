import React from "react";
import WeatherDay from "./WeatherDay";
import WeatherDetails from "./WeatherDetails";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWeekForecast } from "../actions/week-forecast";

class Weather extends React.Component {
    componentDidMount() {
        this.props.fetchWeekForecast();
    }

    handleReloadClick() {
        return () => this.props.fetchWeekForecast();
    }

    render() {
        const { loading, error, forecast } = this.props;
        if (loading)
            return (
                <div className="weather">
                    <span className="fa fa-spinner fa-spin"></span>
                </div>
            );
        if (error)
            return (
                <div className="weather">
                    <div className="error">
                        Error occurred during data fetch. Try to{" "}
                        <button onClick={this.handleReloadClick()}>reload</button>
                    </div>
                </div>
            );
        if (!forecast || forecast.length === 0) return null;
        return (
            <div className="weather">
                <ul className="list-inline mx-auto">
                    {forecast.map((day) => (
                        <WeatherDay day={day} key={day.dt} />
                    ))}
                </ul>
                <WeatherDetails />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.weekLoading,
    error: state.weekError,
    forecast: state.weekForecast,
});
const mapDispatchToProps = { fetchWeekForecast };

Weather.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    forecast: PropTypes.arrayOf(PropTypes.shape({
        dt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        temp: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
        }),
        weather: PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
        }),
    })),
    fetchWeekForecast: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
