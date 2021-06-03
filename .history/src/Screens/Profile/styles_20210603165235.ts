import styled from 'styled-components/native';
import {ScreenMainText, Small, BoldMedium} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {View, Image} from 'react-native';

import Button from '../../components/Button';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  align-items: center;
`;

export const UserPhoto = styled(Image)`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 20px;
  opacity: 0.9;

  /* margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0; */
`;

export const UserData = styled(BoldMedium)`
  color: ${({theme}) => theme.colors.backgroundLight};
  margin-bottom: -6px;
`;
export const UserDataSmall = styled(Small)`
  color: ${({theme}) => theme.colors.backgroundLight};
`;
export const SectionTitle = styled(ScreenMainText)`
  margin-left: ${RFValue(30)}px;
`;
export const FieldWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  /* justify-content: space-evenly; */
  margin: ${RFValue(20)}px 0;
`;
export const UserProfileView = styled.View`
  width: 100%;
  align-items: center;
  /* flex-direction: row; */
  justify-content: center;
  height: ${RFPercentage(40)}px;
  background-color: ${({theme}) => theme.colors.backgroundMedium};
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  margin-bottom: ${RFValue(20)}px;
`;

export const CreateEvent = styled(Button)`
  /* margin-top: ${RFValue(25)}px; */
  background-color: ${({theme}) => theme.colors.purpleSmooth};
  width: ${RFPercentage(52.5)}px;
  color: #1424;
  border: 0;
`;
export const EditProfileButton = styled.    Button)`
  /* margin-top: ${RFValue(25)}px; */
  width: ${RFValue(80)}px;
  display: flex;
  height: 80px;
  border-width: 1px;
  /* border-width: 1px; */
  border-color: red;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  border: 0;
`;

export const ScreenSection = styled(View)`
  justify-content: center;
  height: ${RFPercentage(75)}px;
  width: ${RFPercentage(52.5)}px;
  background-color: ${props => props.theme.colors.backgroundMedium};
  align-items: center;

  border-radius: ${RFValue(12)}px;
  /* background-color: red; */
`;

export const EventImg = styled.Image`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  border-radius: 10px;

  /* margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0; */
`;
export const FlatListWrapper = styled.View`
  width: ${RFPercentage(20)}px;
  /* justify-content: center; */
  align-items: center;
`;
export const ImgInfo = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  font-family: 'Roboto-Bold';
  text-align: center;
  margin-top: 10px;
  color: ${({theme}) => theme.colors.lightGray};
`;

export const ImageWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${RFValue(110)}px;
  width: ${RFPercentage(70)}px;
  background-color: ${props => props.theme.colors.backgroundMedium};

  border-radius: ${RFValue(12)}px;
  /* background-color: red; */
`;
