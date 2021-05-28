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
  margin-top: ${RFValue(5)}px;
  font-family: 'Roboto-Regular';
  line-height: ${RFValue(28)}px;
`;
export const SmallText = styled(Text)`
  font-size: ${RFValue(16)}px;
  font-family: 'Roboto-Medium';
  line-height: ${RFValue(16)}px;
  margin-top: ${RFValue(10)}px;
`;

export const BoldMediumText = styled(Text)`
  font-size: ${RFValue(24)}px;
  font-family: 'Roboto-Bold';
  line-height: ${RFValue(26)}px;
  color: ${({theme}) => theme.colors.lightGray};
  text-align: center;
  margin: ${RFValue(14)}px 0;

  letter-spacing: 2px;
`;
