import React, {Component} from 'react';
import styled from 'styled-components';
import router from "./router";
import {Provider} from "react-redux";
import { store } from './createStore';

export const Container = styled.div`
    width: 100vw;
    height: 250px;
    padding: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #212121;
`;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    {/* Navigation per example */}
                    {router(window.LAREACT_ROUTE)}
                    {/* Footer per example */}
                </Container>
            </Provider>
        );
    }
}

export default App;
