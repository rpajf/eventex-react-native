import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string | Element;
}
const Button: React.FC<ButtonProps> = ({children, ...rest}: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
export default Button;
