// @flow

import * as React from 'react';
import styled from 'styled-components/native';
import PointCard from '../components/PointCard';

const Wrapper = styled.View`
  background-color: #25D366;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const ButtonsWrapper = styled.View`
  background-color: #25D366;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Card = styled.View`
  elevation: 3;
  margin: 20px;
  background-color: #131418;
  padding: 20px;
  border-radius: 20px;
`

const FireWrapper = styled.View`
  margin: 20px;
  justify-content: center;
  align-items: center;  
  border-radius: 20px;
`
const CardText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
`;

const FireText = styled.Text`
  color: #ffffff;
  font-size: 80px;
`;

const OptionButton = styled.TouchableOpacity`
  background-color: #131418;
  height: 70px;
  margin: 20px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 42px;
`;

class Options extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Wrapper>
        <Card>
          <CardText>Escolha o número de participantes e conte quem come mais!</CardText>
        </Card>
        <ButtonsWrapper>
          <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 1 })}>
            <Text>2</Text>
          </OptionButton>
          <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 2 })}>
            <Text>4</Text>
          </OptionButton>
          <OptionButton onPress={() => this.props.navigation.navigate('Home', { option: 3 })}>
            <Text>6</Text>
          </OptionButton>
        </ButtonsWrapper>
        <FireWrapper>
          <FireText>🔥</FireText>
        </FireWrapper>
      </Wrapper>
    )
  }
}

export default Options;