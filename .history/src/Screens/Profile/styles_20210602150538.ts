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
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 20px;
  opacity: 0.9;

  /* margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0; */
`;

export const UserData = styled(Small)`
  color: ${({theme}) => theme.colors.backgroundLight};
`;
export const FieldWrapper = styled.View`
  flex-direction: row;
`;
export const UserProfileView = styled.View`
  width: 100%;
  align-items: center;
  height: ${RFPercentage(45)}px;
`;
