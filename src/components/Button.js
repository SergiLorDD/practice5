import React from "react";
import PropTypes from "prop-types";

export default function Button({ className, text, onClick }) {
    return (
        <div className="col-2">
            <button className={"btn btn-block " + className} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
};
