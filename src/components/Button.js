// @flow

import * as React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #131418;
  border-color: #25D366;
  border-width: 1px;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 40px;
`;

const Button = ({text, onPress, left}) => (
  <Wrapper onTouchStart={onPress}>
    <Text>{text}</Text>
  </Wrapper>
)

export default Button;