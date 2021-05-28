import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  pad
  background-color: ${({theme}) => theme.colors.primary};
`;
export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#9999',
})`

`