import styled from 'styled-components/native';
import {Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const WarnText = styled(Text)`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.attention};
  margin-top: ${RFValue(5)}px;
  font-family: 'Roboto-Regular';
  line-height: ${RFValue(16)}px;
`;
export const BoldText = styled(Text)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.lightGray};
  /* margin-top: ${RFValue(5)}px; */
  font-family: 'Roboto-Regular';
  line-height: ${RFValue(28)}px;
`;
