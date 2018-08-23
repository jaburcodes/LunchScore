// @flow

import * as React from 'react';
import styled from 'styled-components';
import PointCard from '../components/PointCard';

const Wrapper = styled.View`
  background-color: #ffffff;
  flex-direction: column;
  flex: 1;
`;



class Home extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  }
  state = {
    counters: [
      {score: 0},
      {score: 0}
    ]
  }
  handlePlusPress = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {score: c.score+1} : {...c});
    this.setState({ counters: newCounters });
  }

  handleMinusPress = (i) => {
    const { counters } = this.state;
    const newCounters = counters.map((c, key) => key === i ? {score: c.score-1} : {...c});
    this.setState({ counters: newCounters });
  }

  render() {
    const { counters } = this.state;
    return (
      <Wrapper>
        {counters.map((s, i) => 
          <PointCard 
            score={s.score} 
            reverse={i % 2 === 0}
            onPlusPress={() => this.handlePlusPress(i)}
            onMinusPress={() => this.handleMinusPress(i)}
          />)}
      </Wrapper>
    )
  }
}

export default Home;