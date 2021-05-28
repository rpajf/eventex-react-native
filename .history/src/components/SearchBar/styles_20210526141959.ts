import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => }
  background-color: ${({theme}) => theme.colors.primary};
`;
export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#9999',
})`
  flex: 1;
  color: #fff;
`;
