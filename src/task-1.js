import React from "react";
import PropTypes from "prop-types";
import TabItem from "./components/TabItem";

export default class Accordion extends React.Component {

    renderTabs(tabs) {
        if(!tabs || tabs.length === 0) return;

        return tabs.map((tab, index) => <TabItem {...tab} key={index}/>)
    }

    render() {
        return (
            <div>
                {this.renderTabs(this.props.tabs)}
            </div>
        );
    }
}

Accordion.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string
        })
    )
};
