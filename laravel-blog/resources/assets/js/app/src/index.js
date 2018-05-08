import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {persistStore} from "redux-persist";
import injectGlobalCss from "./injectGlobalCss";
import { store } from './createStore';

// Terminal styling
import './Terminal-styling.css';

// only show app when persisted
persistStore(store, {}, () => {
    injectGlobalCss();
    ReactDOM.render(
        <App/>,
        document.getElementById('root'),
    );
});

registerServiceWorker();
