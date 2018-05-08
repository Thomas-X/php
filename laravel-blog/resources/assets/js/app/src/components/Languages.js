import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Page} from "./styledCopy";

const Container = styled.div`
  width: 100%;
  height: 3px;
  display:flex;
  cursor: pointer;
`;

const LanguageItem = styled.span`
  height: 10px;
  flex: ${({width}) => width};
  ${({bgColor}) => `background-color: ${bgColor.color}`};
`;

const LangContainer = styled.div`
  width: 100%;
  transition: all 300ms ease-in-out;
  ${({height}) => (height >= 0 && height !== null) ? `height: ${height}px;` : ''}
  overflow: hidden;
  ${({height}) => height > 0 ? 'padding: 3rem;' : 'padding: 0 3rem 0 3rem;' }
`;

const LangText = styled.span`
    font-size: 18px;
    padding: .5rem;
`;

const PageExtended = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

class Languages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        };
    }

    render() {
        const {colors, languages} = this.props;

        return (
            <section>
                <Container onClick={() => this.setState({ opened: !this.state.opened })}>
                    {languages && languages.map((lang, i) => {
                        return (
                            <LanguageItem bgColor={colors[lang.language]} width={lang.percentage} key={'LanguageItem-' + i}/>
                        );
                    })}
                </Container>
                <LangContainer height={this.state.opened ? null : 0}>
                    <PageExtended>
                        {languages && languages.map((lang, i) => {
                            return (
                                <LangText key={'LangText' + i}>{lang.language}&thinsp;<strong>{parseFloat(lang.percentage).toFixed(2)}%</strong></LangText>
                            )
                        })}
                    </PageExtended>
                </LangContainer>
            </section>
        )
    }
}

export default connect((state) => ({
    colors: state.lareact.colors,
    languages: state.lareact.languageData
}))(Languages);
