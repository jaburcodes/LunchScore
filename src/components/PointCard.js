// @flow

import * as React from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const Wrapper = styled.View`
  background-color: #ffffff;
  flex: 1;
  margin: 20px;
  elevation: 5;
  border-radius: 20px;  
`;

const ScoreWrapper = styled.View`
  background-color: #ffffff;
  flex: 3;
  justify-content: center;
  align-items: center;
  border-radius: 20px;  

`;

const ScoreText = styled.Text`
  color: #0932FD;
  font-size: 52px;
`;

const ButtonsWrapper = styled.View`
  background-color: #ffffff;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;  
`;

const PointCard = ({score, onPlusPress, onMinusPress, reverse}) => (
  <Wrapper style={reverse && {transform: [{ rotate: '180deg' }]}}>
    <ScoreWrapper>
      <ScoreText>{score}</ScoreText>
    </ScoreWrapper>
    <ButtonsWrapper> 
      <Button text="-" onPress={onMinusPress} />
      <Button text="+" onPress={onPlusPress}/>
    </ButtonsWrapper>
  </Wrapper>
)

export default PointCard;