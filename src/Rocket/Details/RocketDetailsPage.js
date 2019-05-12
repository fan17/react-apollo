import React from "react";
import PropTypes from "prop-types";
import Rocket from "./Rocket";
import Page from "../../Layout/Page";

class RocketDetailsPage extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        rocket: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    };

    render() {
        const { loading, rocket } = this.props;
        return (
            <Page title="Rocket details">
                {loading ? (
                    "loading..."
                ) : (
                    <Rocket
                        name={rocket.name}
                        description={rocket.description}
                    />
                )}
            </Page>
        );
    }
}

export default RocketDetailsPage;
