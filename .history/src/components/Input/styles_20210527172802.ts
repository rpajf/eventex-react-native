import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  background-color: ${({theme}) => theme.colors.lightGray};
  height: ${RFValue(110)}px;
  width: 100%;
  font-size: ;
`;
