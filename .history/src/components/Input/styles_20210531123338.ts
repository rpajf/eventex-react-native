import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  background-color: ${({theme}) => theme.colors.purpleGray};
  height: ${RFValue(54)}px;
  border-radius: 8px;
  width: 100%;
  font-family: ;
  font-size: ${RFValue(14)}px;
`;
