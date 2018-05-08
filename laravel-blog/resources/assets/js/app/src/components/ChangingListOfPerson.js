import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import delay from 'timeout-as-promise';

// pixel perfect.. yea..
export const stepSize = 1.2;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1.2em;
  overflow: hidden;
`;

const lineHeight = css`
  line-height: 1.2;
`;

const Above = styled.span`
  ${lineHeight}
`;

const Middle = styled.span`
  ${lineHeight}
`;

const Under = styled.span`
  ${lineHeight}
`;

const TextContainer = styled.div`
  position: relative;
  transition: all 600ms ease-in-out;
  display: flex;
  flex-direction: column;
  // -52px to offset for 'middle' text
  white-space: nowrap;
  top: -${stepSize}em;
`;

class ChangingListOfPerson extends Component {

    constructor(props) {
        super(props);
        let names;
        if (!props.names) {
            names = [
                'is a developer',
                'is a programmer',
                'is a cake maker',
                'is a maker of things',
                'likes to assemble stuff',
                'likes writing code',
            ];
        } else {
            names = props.names
        }
        this.state = {
            names,
            aboveName: 0,
            middleName: 1,
            underName: 2,
        };
    }

    static randomIndex(arr, notThisNumber) {
        const result = Math.floor(Math.random() * arr.length);
        for (const number of notThisNumber) {
            if(number === result) {
                return ChangingListOfPerson.randomIndex(arr, notThisNumber);
            }
        }
        return result;
    };

    componentDidMount() {
        setInterval(() => {
            this.cycleForward()
                .then(() => {
                    // Disable transition so we sneakily can reset
                    this.textContainer.style.transition = 'all 0ms ease-in-out';

                    this.setState({
                        middleName: this.state.underName,
                    }, () => {
                        this.reset();

                        delay(1200)
                            .then(() => {
                                // Set transition again
                                this.textContainer.style.transition = 'all 600ms ease-in-out';
                                const {middleName, underName, names} = this.state;
                                const currentlySelected = [middleName, underName];
                                // Change names
                                this.setState({
                                    underName: ChangingListOfPerson.randomIndex(names, currentlySelected),
                                });
                            })
                    });
                });
        }, 7000)
    }

    reset() {
        this.textContainer.style.top = '-' + stepSize + 'em';
    }

    cycleForward() {
        // Can't be bothered to edit babel config to support fields etc.
        return (async () => {
            this.textContainer.style.top = '-' + stepSize * 2 + 'em';
            return delay(1500);
        })();
    };

    render() {
        const {aboveName, middleName, underName, names} = this.state;
        return (
            <Container>
                <TextContainer innerRef={(ref) => this.textContainer = ref}>
                    <Above>{names[aboveName]}</Above>
                    <Middle>{names[middleName]}</Middle>
                    <Under>{names[underName]}</Under>
                </TextContainer>
            </Container>
        );
    }
}

export default ChangingListOfPerson;