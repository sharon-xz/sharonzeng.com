import React, { useEffect } from "react";
import ReactGA from "react-ga";

ReactGA.initialize('UA-180479428-1');

// Tracking using react-ga with react-router: https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker

export default (WrappedComponent, options = {}) => {
    const trackPage = page => {
        ReactGA.set({
            page,
            ...options
        });
        ReactGA.pageview(page);
    };

    const HOC = props => {
        useEffect(() => trackPage(props.location.pathname), [
            props.location.pathname
        ]);

        return <WrappedComponent {...props} />;
    };

    return HOC;
};