import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacity {


  children: string;
}
const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
export default Button;
