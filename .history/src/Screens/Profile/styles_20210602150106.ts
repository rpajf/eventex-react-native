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
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(30)}px;
  border-radius: 9px;
  border: 18px solid rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;

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
