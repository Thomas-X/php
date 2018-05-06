import React from "react";
import styled from 'styled-components';
import {BigParagraph, BigTitle} from "../components/styledCopy";
import {MorphReplace} from "react-svg-morph";
import ChangingListOfPerson from "../components/ChangingListOfPerson";

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

const Flex = styled.div` display: flex; `;

export default class Home extends React.Component {

    render() {
        return (
            <section>
                <Section>
                    <Container>
                        <TextContainer>
                            <Flex>
                                <BigTitle>
                                    <strong>
                                        Thomas
                                    </strong>
                                    &nbsp;
                                </BigTitle>
                                <BigTitle>
                                    <ChangingListOfPerson/>
                                </BigTitle>
                            </Flex>
                            <BigParagraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorem doloremque earum
                                fugit illo nemo optio pariatur recusandae reiciendis vel? Eum, id, omnis. Autem impedit
                                laboriosam nesciunt sit ullam veniam.
                            </BigParagraph>
                        </TextContainer>
                    </Container>
                </Section>
            </section>

        );
    }
}