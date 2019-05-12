import React from "react";
import PropTypes from "prop-types";
import RocketItem from "./RocketItem";
import Page from "../../Layout/Page";

class RocketIndexPage extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        rockets: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            })
        )
    };
    render() {
        const { loading, rockets } = this.props;

        return (
            <Page title="List of SpaceX rockets">
                {loading
                    ? "loading..."
                    : rockets.map(({ id, name, description }) => (
                          <RocketItem
                              key={id}
                              id={id}
                              name={name}
                              description={description}
                          />
                      ))}
            </Page>
        );
    }
}

export default RocketIndexPage;
