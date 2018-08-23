// @flow

import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.TouchableOpacity`
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0932FD;
  ${p => p.left ? `
    border-bottom-left-radius: 20px;  
  ` : `
  border-bottom-right-radius: 20px;  
  `}
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 40px;
`;

const Button = ({text, onPress, left}) => (
  <Wrapper onPress={onPress} left={left}>
    <Text>{text}</Text>
  </Wrapper>
)

export default Button;