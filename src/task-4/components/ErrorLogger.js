import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteError } from "../actions/error-logger";

function ErrorLogger({ errors, deleteError }) {
    const handleErrorAlertClick = (id) => () => {
        deleteError(id);
    };
    if(errors.length === 0) return null;
    return errors.map((error) => (
        <div className="alert alert-warning alert-dismissible show" role="alert" key={error.id}>
            {error.message}
            <button
                type="button"
                className="close"
                onClick={handleErrorAlertClick(error.id)}
            >
                <span>&times;</span>
            </button>
        </div>
    ));
}

const mapStateToProps = (state) => ({
    errors: state.errorLogger,
});

const mapDispatchToProps = { deleteError };

ErrorLogger.propTypes = {
    deleteError: PropTypes.func,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            message: PropTypes.string,
        })
    ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorLogger);
