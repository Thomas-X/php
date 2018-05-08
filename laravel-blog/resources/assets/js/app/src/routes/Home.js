import React from "react";
import styled, {css} from 'styled-components';
import {BigParagraph, BigTitle, Paragraph} from "../components/styledCopy";
import ChangingListOfPerson from "../components/ChangingListOfPerson";
import Languages from "../components/Languages";
import {PageRules} from "../components/styledCopy";
import CurrentGitStats from "../components/CurrentGitStats";
import delay from 'timeout-as-promise';

// <section>
//     <Section>
//         <Container>
//             <TextContainer>
//                 <Flex>
//                     <BigTitle>
//                         <strong>
//                             Thomas
//                         </strong>
//                         &nbsp;
//                     </BigTitle>
//                     <BigTitle>
//                         <ChangingListOfPerson/>
//                     </BigTitle>
//                 </Flex>
//
//             </TextContainer>
//         </Container>
//     </Section>
// </section>
// const Section = styled.section`
//   width: 100%;
//   height: calc(100vh - 90px);
//   position: relative;
// `;
//
// const Container = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
//
// const TextContainer = styled.div`
//   display:flex;
//   flex-direction: column;
// `;

const Flex = styled.div` 
    display: flex; 
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex: 4;
`;

const FlexSub = styled.div`
  display: flex;  
`;

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2B0645;
  display:flex;
  flex-direction: column;
`;

const Sub = styled.div`
  width: 100%;
  flex: 2;
  overflow-y: scroll;
`;

const SmallSpacing = styled.div`
  padding: .5em;
`;

const StyledParagraph = styled(Paragraph)`
  width: 50%;
`;

const LanguagesContainer = styled.div`
  width: 80%;
`;

const Container = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  ${PageRules}
  flex: 1;
`;

export default class Home extends React.Component {

    createTerminal() {
        // create terminal

        const filesystem = {
            etc: {
                apache2: {
                    ['apache2.conf']: 'Ha, no, curl around now'
                }
            },
            gitrepos: {
                bitcoin: {
                    bin: {
                        lorem_gypsum: 'i dont know what to put on these files anymore :(',
                    },
                    my_wallet_key: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjU3MzkwNTIsImV4cCI6MTU1NzI3NTA1MiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.zdEDiM1iyudZnosR62bdvYKPoBWPVNMGkUFNKq_NSfs',
                }
            },
            var: {
                www: {
                    ['about']: 'Hey! You found it! Hopefully without cheating, huh? Run this command for the solution: curl /about',
                    ['portfolio']: 'WOW! You found my portfolio! Run this command for the solution: curl /portfolio',
                }
            },
            ['.ssh']: {
                'id_rsa': 'iLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.i3Ov0fynHOR3ajYpt43VAdg9rVKSwPy1Aby7',
                'id_rsa.pub': 'AiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjU3MzkzMTAsImV4cCI6MTU1NzI3NTMxMCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGF @ yea@right'
            }
        }

        const commands = {
            http: {
                name: 'http',
                type: 'builtin',
                man: 'DEPRECATED: use curl instead',
                fn: function http(args) {
                    return `DEPRECATED: use curl instead`;
                }
            },
            curl: {
                name: 'curl',
                type: 'builtin',
                man: 'Curls something .. presumably? 1st parameter is the url to curl, no flags.',
                fn: function curl(args) {
                    if(args._[0] === ' ') {
                        throw new Error('HA! No spaces as url');
                    }
                    if(args._.length > 1 || args._.length <= 0) {
                        throw new Error('Invalid amount of arguments given');
                    }
                    const url = args._[0];

                    if(url === '/about') {
                        // do some redux logic to 'unlock' about page
                    }
                    if(url === '/portfolio') {
                        // do some redux logic to 'unlock' portfolio page
                    }

                    return `
                    
                    `
                },
            },
        };

        const opts = {
            filesystem,
            commands
        };

        new TermlyPrompt('#shellContainer', opts);
    }

    componentDidMount() {
        // do alot of nasty non react things but eh, can't be bothered to do it proper way
        // and creating an entire react-terminal library

        this.createTerminal();

        document.getElementsByClassName('current terminal-row')[0].focus();

        window.onkeyup = function (e) {
            if (e.key === 'Enter') {
                const elem = document.getElementsByClassName('current terminal-row')[0];
                elem.scrollIntoView();
            }
        }
    }

    render() {
        return (
            <FullPage>
                <Flex>
                    <TextContainer>
                        <FlexSub>
                            <BigTitle>
                                Thomas&nbsp;
                            </BigTitle>
                            <BigTitle>
                                <ChangingListOfPerson/>
                            </BigTitle>
                        </FlexSub>
                        <BigParagraph italic>
                            He also likes to makes cookies. Use this 'terminal' below to learn more about him and his
                            work
                            :)
                        </BigParagraph>
                    </TextContainer>
                    <CurrentGitStats/>
                </Flex>
                <Sub>
                    <div id="shellContainer"></div>
                </Sub>
            </FullPage>
        );
    }
}