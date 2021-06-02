import styled from 'styled-components/native';
import {ScreenMainText, Small} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {View, Image} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  align-items: center;
`;

export const MainText = styled(ScreenMainText)`
  color: #ffff;
`;

export const UserPhoto = styled(Image)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: 20px;



  margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0;
`;

export const UserData = styled(Small)``;
export const FieldWrapper = styled.View`
  flex-direction: row;
`;
export const UserProfile = styled.View`
  width: 100%;

  height: ${RFPercentage(45)}px;
`;
