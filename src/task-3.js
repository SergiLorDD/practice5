import React from "react";
import PropTypes from "prop-types";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        };
    }

    handleClick = (index) => () => {
        this.setState({ active: index });
    };

    renderHeaders = () => {
        const { tabs, headerTpl } = this.props;
        const { active } = this.state;
        return tabs.map((item, index) => {
            return (
                <li
                    className={
                        active === index
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                    onClick={this.handleClick(index)}
                    key={item.header + item.index}
                >
                    {headerTpl({item, index})}
                </li>
            );
        })
    }

    renderContents = () => {
        const { tabs, contentTpl } = this.props;
        const { active } = this.state;
        return tabs.map((item, index) => {
            return (
                <div
                    className={active === index ? "" : "d-none"}
                    key={item.content + index}
                >
                    {contentTpl({item, index})}
                </div>
            );
        })
    }

    render() {
        if (!this.props.tabs || this.props.tabs.length === 0) return null;
        return (
            <div className="row">
                <ul className="col-3 list-group">
                    {this.renderHeaders()}
                </ul>
                <div className="col-9">
                    {this.renderContents()}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string,
        })
    ),
    headerTpl: PropTypes.func,
    contentTpl: PropTypes.func
};
Tabs.defaultProps = {
    tabs: [],
    headerTpl: ({item}) => item.header,
    contentTpl: ({item}) => item.content
}