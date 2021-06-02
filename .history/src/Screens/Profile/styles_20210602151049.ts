import styled from 'styled-components/native';
import {ScreenMainText, Small} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {View, Image} from 'react-native';

import Button from '../../components/Button';

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
  justify-content: center;
  height: ${RFPercentage(45)}px;
`;

export const CreateEvent = styled(Button)`
  /* margin-top: ${RFValue(25)}px; */
  background-color: ${({theme}) => theme.colors.purpleSmooth};
  width: ${RFPercentage(52.5)}px;
  color: #1424;
  border: 0;
`;

export const EventImg = styled.Image`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(30)}px;
  border-radius: 10px;
  border: 18px solid rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;

  margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0;
`;
export const ImgInfo = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
  font-family: 'Roboto-Bold';
  text-align: center;

  color: ${({theme}) => theme.colors.lightGray};
`;