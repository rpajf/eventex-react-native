import styled, {css} from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import SearchIcon from 'react-native-vector-icons/MaterialIcons';

interface ContainerProps {
  isFocused: boolean;
}
export const Container = styled.View`
  width: 80%;
  height: ${RFPercentage(10)}px;
  margin-top: ${RFPercentage(-10)}px;
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.colors.lightGray};
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;

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
  text-align: center;
`;

export const Icon = styled(SearchIcon)`
  margin-right: 16px;
`;
