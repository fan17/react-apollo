import React from "react";
import FullHeader from "../Layout/Header/FullHeader";
import RocketIndexPage from "./Index/RocketIndexPage";
import RocketDetailsPage from "./Details/RocketDetailsPage";
import RocketIndexApolloConnector from "./Index/Connector/Apollo/RocketIndexApolloConnector";
import RocketDetailsApolloConnector from "./Details/Connector/Apollo/RocketDetailsApolloConnector";

const routes = [
    {
        path: "/rockets",
        exact: true,
        header: () => <FullHeader />,
        main: () => (
            <RocketIndexApolloConnector>
                {data => <RocketIndexPage {...data} />}
            </RocketIndexApolloConnector>
        )
    },
    {
        path: "/rockets/:id",
        exact: true,
        header: () => <FullHeader />,
        main: props => (
            <RocketDetailsApolloConnector id={props.match.params.id}>
                {data => <RocketDetailsPage {...data} />}
            </RocketDetailsApolloConnector>
        )
    }
];

export default routes;
