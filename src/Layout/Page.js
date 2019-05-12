import React, { Component } from "react";
import PropTypes from "prop-types";

class Page extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    render() {
        const { title, children } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexFlow: "row wrap"
                    }}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default Page;
