import React from "react";


export default (route) => {

        // Dynamically import files
        const WrappedComponent = require('./routes/' + route).default;
        return <WrappedComponent/>;

}