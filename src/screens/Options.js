// @flow

import * as React from 'react';
import styled from 'styled-components/native';
import PointCard from '../components/PointCard';

const Wrapper = styled.View`
  background-color: #ffffff;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const OptionButton = styled.TouchableOpacity`
  background-color: #0932FD;
  height: 70px;
  margin: 20px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 40px;
`;

class Options extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Wrapper>
        <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 1 })}>
          <Text>2</Text>
        </OptionButton>
        <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 2 })}>
          <Text>4</Text>
        </OptionButton>
        <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 3 })}>
          <Text>6</Text>
        </OptionButton>
      </Wrapper>
    )
  }
}

export default Options;