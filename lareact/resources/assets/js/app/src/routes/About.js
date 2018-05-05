import React from 'react';
import { connect } from 'react-redux';

export default connect((state) => ({ someTitle: state.lareact[0] }))((props) => (
    <div>
        <a href="/">BACK HOME</a>
        <h1>About {props.someTitle}</h1>
    </div>
));