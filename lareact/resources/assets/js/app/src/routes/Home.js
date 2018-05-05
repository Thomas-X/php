import React from "react";
import Example from "../components/Example";
import styled, {css, keyframes} from "styled-components";
import logo from '../logo.svg';
import { Container} from "../App";
import DatepickerIdk from '../components/DatepickerIdk';


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
    width: 100px;
    heigth: 100px;
    animation: ${rotate360} 10s linear infinite;
`;

const text = css` color: white; font-family: sans-serif `;

const Title = styled.h1`
    ${text}
`;
const Paragraph = styled.p`
    ${text}
`;

export default (props) => (
    <Container>
        <Image src={logo}/>
        <Title className="App-title">Welcome to React</Title>
        <Paragraph>
            To get started, edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <Example text={"Hi via props from Example component!"}/>
        <DatepickerIdk/>
        <br/>
        <a href="/about">TO ABOUT</a>
    </Container>
)