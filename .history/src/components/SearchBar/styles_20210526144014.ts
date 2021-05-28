import styled, {css} from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import SearchIcon from 'react-native-vector-icons/Feather';
interface ContainerProps {
  isFocused: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 80%;
  height: ${RFPercentage(15)}px;
  margin: 20px;
  border-radius: 4px;
  border: 2px solid ${({theme}) => theme.colors.lightGray};
  background-color: ${({theme}) => theme.colors.primary};

  /* ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `} */
`;
export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#9999',
})`
  font-size: 16px;
  flex: 1;
  color: #fff;
`;
