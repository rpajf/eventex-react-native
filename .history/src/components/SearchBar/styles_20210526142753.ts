import styled, {css} from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import SearchIcon from 'react-native-vector-icons/Feather';
interface ContainerProps {
  isFocused: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFPercentage(15)}px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.lightGray};
  background-color: ${({theme}) => theme.colors.primary};

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;
export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#9999',
})`
  font-size: 16px;
  flex: 1;
  color: #fff;
`;
export const Icon = styled(SearchIcon)`
  margin-right: 16px;
`;
