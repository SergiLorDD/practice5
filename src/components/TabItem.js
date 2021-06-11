import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TabItem({ header, content }) {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);
    return (
        <div className="card">
            <div
                onClick={toggleActive}
                className={
                    active
                        ? "card-header text-white bg-info active"
                        : "card-header text-white bg-info"
                }
            >
                {header}
            </div>
            <div className={active ? "card-body" : "card-body d-none"}>
                {content}
            </div>
        </div>
    );
}

TabItem.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
};
