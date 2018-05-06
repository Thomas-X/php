import React, {Component} from 'react';
import styled from 'styled-components';
import router from "./router";
import {Provider} from "react-redux";
import {store} from './createStore';
import {Col, Grid, Row} from "react-bootstrap";
import {Page} from "./components/styledCopy";
import Navigation from "./components/Navigation";
import Languages from "./components/Languages";

class App extends Component {
    render() {
        // TODO nav positioning & fancy animation for git language shower
        return (
            <Provider store={store}>
                <section>
                    {/* Navigation per example */}
                    <Languages/>
                    <Navigation/>
                    <Page>
                        {router(window.LAREACT_ROUTE)}
                    </Page>
                    {/* Footer per example */}
                </section>
            </Provider>
        );
    }
}

export default App;
