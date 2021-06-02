import styled from 'styled-components/native';
import {Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const WarnText = styled(Text)`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.attention};
  margin-top: ${RFValue(5)}px;
  font-family: 'Roboto-Regular';
  font-weight: 400;

  line-height: ${RFValue(16)}px;
`;
export const BoldText = styled(Text)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.lightGray};
  margin-bottom: ${RFValue(5)}px;
  font-family: 'Montserrat-Bold';
  font-weight: 700;
  /* letter-spacing: 1px; */
  line-height: ${RFValue(28)}px;
  /* text-transform: uppercase; */
`;
export const SmallText = styled(Text)`
  font-size: ${RFValue(16)}px;
  font-family: 'Roboto-Medium';
  text-align: center;
  line-height: ${RFValue(16)}px;
  margin-top: ${RFValue(10)}px;
`;

export const BoldMediumText = styled(Text)`
  font-size: ${RFValue(22)}px;
  font-family: 'Roboto-Bold';
  line-height: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.lightGray};
  text-align: center;
  margin: ${RFValue(14)}px 0;

  letter-spacing: 2px;
`;
