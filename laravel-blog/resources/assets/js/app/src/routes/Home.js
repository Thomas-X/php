import React from "react";
import styled from 'styled-components';
import {BigTitle} from "../components/styledCopy";
import {MorphReplace} from "react-svg-morph";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Checked extends React.Component {
    render() {
        return (
            <svg fill="#757575" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
        );
    }
}

class CheckBox extends React.Component {
    render() {
        return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#757575" height="24" width="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            <path d="M1.6.333h8.8V11.26H1.6z" fill="none"/>
            <path
                d="M2.333 9.44h7.334V7.617H2.333zm.733-1.367H3.8v.91h-.734zm-.733-5.919v1.821h7.334v-1.82zM3.8 3.52h-.734v-.91H3.8zM2.333 6.707h7.334V4.886H2.333zm.733-1.366H3.8v.91h-.734z"/>
            <g>
                <path d="M21.55 12.317H12.75V1.389h8.801z" fill="none"/>
                <path
                    d="M20.817 3.21h-7.335v1.822h7.335zm-.734 1.366h-.733v-.91h.733zm.734 5.92V8.673h-7.335v1.821zM19.35 9.128h.733v.911h-.733zm1.467-3.187h-7.335v1.821h7.335zm-.734 1.366h-.733v-.91h.733z"/>
            </g>
        </svg>
    )
        ;
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    toggleChecked() {
        console.log(this.state);
        this.setState({checked: !this.state.checked});
    }

    render() {
        function easeInOutQuad(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };


        return (
            <section>
                <Section>
                    <BigTitle>
                        <strong>
                            Thomas
                        </strong>
                        &thinsp; is a developer.
                    </BigTitle>
                </Section>
            </section>

        );
    }
}