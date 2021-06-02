import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import {ScreenMainText} from '../../components/Text';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Small} from '../../components/Text';
import Button from '../../components/Button';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundDark};
  padding: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px ${RFValue(15)}px;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(7.5)}px;
  justify-content: center;
  margin-left: ${RFValue(40)}px;
`;
export const ImageHeader = styled(Image)`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(40)}px;
  opacity: 0.8;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const ImageWrapper = styled(View)`
  justify-content: center;
  height: ${RFPercentage(75)}px;
  width: ${RFPercentage(52.5)}px;
  background-color: ${props => props.theme.colors.backgroundMedium};
  align-items: center;
  /* justify-content: space-around; */
  /* padding: ${RFValue(15)}px 0 ${RFValue(15)}px 0; */
  /* border-color: rgba(81, 67, 99, 0.5); */
  /* border-color: rgb(141, 147, 160, 0.9); */
  /* border-color: red; */
  /* padding: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(15)}px ${RFValue(
    15,
  )}px; */
  border-radius: ${RFValue(12)}px;
  /* background-color: red; */
`;
export const EventTitle = styled.Text`
  color: ${props => props.theme.colors.customWhite};
  /* color: yellow; */
  font-family: 'Roboto-Medium';
  margin-top: ${RFValue(10)}px;

  letter-spacing: 1px;
  font-size: 22px;
  line-height: 22px;
`;
export const EventContent = styled.View`
  align-items: center;
  padding: ${RFValue(10)}px ${RFValue(15)}px 0 ${RFValue(15)}px;
  justify-content: space-evenly;
  height: ${RFPercentage(25)}px;
`;

export const EventInfoText = styled(Small)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightGray};
  text-align: center;
  line-height: 16px;
  margin-left: 5px;
`;
export const TitleTag = styled(Text)`
  color: ${({theme}) => theme.colors.lightGray};
  font-family: 'Nunito-Bold';
  font-weight: 600;
  font-size: 16px;

  line-height: 18px;
  letter-spacing: 0;
  align-self: center;
`;
export const BuyButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.p};
  width: ${RFPercentage(52.5)}px;
`;
