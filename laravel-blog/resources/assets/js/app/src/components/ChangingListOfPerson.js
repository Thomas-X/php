import React, {Component} from 'react';
import styled from 'styled-components';
import delay from 'timeout-as-promise';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1em;
  overflow: hidden;
`;

const Above = styled.span`
`;

const Middle = styled.span`
`;

const Under = styled.span`
`;

const TextContainer = styled.div`
  position: relative;
  transition: all 600ms ease-in-out;
  display: flex;
  flex-direction: column;
  // -52px to offset for 'middle' text
  top: -52px;
`;

class ChangingListOfPerson extends Component {
    constructor(props) {
        super(props);778
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
        this.stepSize = 52;
        this.state = {
            names,
            aboveName: 0,
            middleName: 1,
            underName: 2,
        };
    }

    static randomIndex(arr, notThisNumber) {
        const result = Math.floor(Math.random() * arr.length);
        console.log(result);
        if (notThisNumber.findIndex((r) => r !== result)) {
            return ChangingListOfPerson.randomIndex(arr, notThisNumber);
        }
        return result;
    };

    componentDidMount() {
        setInterval(() => {
            this.cycleForward()
                .then(() => {
                    // Disable transition so we sneakely can reset
                    this.textContainer.style.transition = 'all 0ms ease-in-out';

                    this.setState({
                        middleName: this.state.underName,
                    }, () => {
                        this.reset();

                        delay(1200)
                            .then(() => {
                                // Set transition again
                                this.textContainer.style.transition = 'all 600ms ease-in-out';
                                const {aboveName, middleName, underName, names} = this.state;
                                const currentlySelected = [aboveName, middleName, underName];
                                // Change names
                                this.setState({
                                    underName: ChangingListOfPerson.randomIndex(names, currentlySelected),
                                });
                            })
                    });
                });
        }, 10000)
    }

    reset() {
        this.textContainer.style.top = '-' + this.stepSize + 'px';
    }

    cycleForward() {
        // Can't be bothered to edit babel config to support fields etc.
        return (async () => {
            this.textContainer.style.top = '-' + this.stepSize * 2 + 'px';
            return delay(1500);
        })();
    };

    render() {
        const {aboveName, middleName, underName, names} = this.state;
        return (
            <Container>
                <TextContainer innerRef={(ref) => this.textContainer = ref}>
                    <Above innerRef={(ref) => this.above = ref}>{names[aboveName]}</Above>
                    <Middle innerRef={(ref) => this.middle = ref}>{names[middleName]}</Middle>
                    <Under innerRef={(ref) => this.under = ref}>{names[underName]}</Under>
                </TextContainer>
            </Container>
        );
    }
}

export default ChangingListOfPerson;