import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  background-color: ${({theme}) => theme.colors.backgroundLight};
  height: ${RFValue(54)}px;
  width: 100%;
  font-size: ${RFValue(14)}px;
`;