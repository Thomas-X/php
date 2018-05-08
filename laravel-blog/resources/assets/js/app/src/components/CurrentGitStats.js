import React from 'react';
import {connect} from "react-redux";
import {Paragraph} from "./styledCopy";
import styled from "styled-components";
import {Component} from "react";
import moment from 'moment';

const Container = styled.div`
  align-self: center;
`;

const StyledParagraph = styled(Paragraph)`
  color: #6c757d;
  font-size: 12px;
  font-style: italic;
  padding: 0 1rem;
`;

class CurrentGitStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        };
    }

    render() {
        const {colors, languages} = this.props;

        return (
            <Container>
                {
                    languages && (
                            <StyledParagraph>
                            My current git repo languages: {languages.map(({language, percentage}, i) => {
                                return (
                                    <span
                                        key={i}>{language} - {parseFloat(percentage).toFixed(2)}%{languages[i + 1] !== undefined ? ',' : '.'} </span>
                                )
                            })}
                            <i>Updated at {moment(languages[0].created_at).format('DD-MM-YYYY')}</i>
                        </StyledParagraph>
                    )
                }
            </Container>
        )
    }
}

export default connect((state) => ({
    colors: state.lareact.colors,
    languages: state.lareact.languageData
}))(CurrentGitStats);