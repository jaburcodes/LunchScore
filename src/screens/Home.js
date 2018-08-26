// @flow

import * as React from 'react';
import styled from 'styled-components/native';
import PointCard from '../components/PointCard';

const Wrapper = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  flex: 1;
`;

const CardWrapper = styled.View`
  background-color: #ffffff;
  flex-direction: column;
  flex: 1;
`;



class Home extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    const option = props.navigation.getParam('option', 1);

    let counters = []
    for (let i = 0; i < option; i++ ) {
      counters = [...counters, {score1: 0, score2: 0}]
    }

    this.state = {
      counters
    }
  }

  handlePlus1Press = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {...c, score1: c.score1+1} : {...c});
    this.setState({ counters: newCounters });
  }

  handleMinus1Press = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {...c, score1: c.score1-1} : {...c});
    this.setState({ counters: newCounters });
  }

  handlePlus2Press = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {...c, score2: c.score2+1} : {...c});
    this.setState({ counters: newCounters });
  }

  handleMinus2Press = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {...c, score2: c.score2-1} : {...c});
    this.setState({ counters: newCounters });
  }

  render() {
    const { counters } = this.state;
    return (
      <Wrapper>
        {counters.map((s, i) => {
          return (
            <CardWrapper key={`CardWrapper_${i}`}>           
              <PointCard
                score={s.score1} 
                reverse
                onPlusPress={() => this.handlePlus1Press(i)}
                onMinusPress={() => this.handleMinus1Press(i)}
              />
              <PointCard
                score={s.score2} 
                onPlusPress={() => this.handlePlus2Press(i)}
                onMinusPress={() => this.handleMinus2Press(i)}
              />
            </CardWrapper>
          )
        })}

      </Wrapper>
    )
  }
}

export default Home;