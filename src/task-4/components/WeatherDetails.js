import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDayForecast } from "../actions/day-forecast";

class WeatherDetails extends React.Component {
    componentDidMount() {
        this.props.fetchDayForecast(this.props.selectedDt);
    }

    handleReloadClick() {
        return () => this.props.fetchDayForecast(this.props.selectedDt);
    }

    render() {
        const { data, loading, error } = this.props;
        if (loading)
            return (
                <div className="details">
                    <span className="fa fa-spinner fa-spin"></span>
                </div>
            );
        if (error)
            return (
                <div className="details">
                    <div className="error">
                        Error occurred during data fetch. Try to{" "}
                        <button onClick={this.handleReloadClick()}>reload</button>
                    </div>
                </div>
            );
        if (!data || !data.dt) return null;
        return (
            <div className="details">
                <div className="day-name">
                    <div>{new Date(data.dt).toDateString()}</div>
                    <img
                        src={`img/${data.weather.icon}.png`}
                        alt={data.weather.description}
                    />
                </div>
                <div>
                    <dl>
                        <dt>Min temp</dt>
                        <dd>{data.temp.min}&#x2103;</dd>

                        <dt>Max Temp</dt>
                        <dd>{data.temp.max}&#x2103;</dd>

                        <dt>Weather</dt>
                        <dd>{data.weather.description}</dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>Wind</dt>
                        <dd>{data.speed} m/s</dd>

                        <dt>Humidity</dt>
                        <dd>{data.humidity}%</dd>

                        <dt>Pressure</dt>
                        <dd>{data.pressure} hpa</dd>
                    </dl>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.dayForecast[state.selectedDt] && state.dayForecast[state.selectedDt].data,
    loading: state.dayForecast[state.selectedDt] && state.dayForecast[state.selectedDt].loading,
    error: state.dayForecast[state.selectedDt] && state.dayForecast[state.selectedDt].error,
    selectedDt: state.selectedDt,
});
const mapDispatchToProps = { fetchDayForecast };

WeatherDetails.propTypes = {
    fetchDayForecast: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    selectedDt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    data: PropTypes.shape({
        dt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        temp: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
        }),
        pressure: PropTypes.number,
        humidity: PropTypes.number,
        weather: PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
        }),
        speed: PropTypes.number,
        deg: PropTypes.number,
        clouds: PropTypes.number,
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
