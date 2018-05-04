import React from "react";


export default (route) => {
    try {
        // Dynamically import files
        const WrappedComponent = require('./routes/' + route).default;
        return <WrappedComponent/>;
    } catch (e) {
        console.error(e);
    }
}