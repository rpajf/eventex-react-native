import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import {ScreenMainText} from '../../components/Text';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Small, BoldMedium} from '../../components/Text';
import LinearGradient from 'react-native-linear-gradient';

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
  /* border-radius: ${RFValue(8)}px; */
  /* margin-bottom: ${RFValue(75)}px; */
  /* position: absolute; */
  /* top: ${RFValue(1)}px; */
  /* border-bottom-color: rgba(13, 13, 15, 0.4);
  border-bottom-width: ${RFValue(75)}px;
  border-bottom-right-radius: 10px;
  border-bottom-right-radius: 10px; */
`;
export const ImageWrapper = styled(View)`
  /* position: relative;  */
  justify-content: center;

  height: ${RFPercentage(60)}px;
  /* background-color: #a782f2; */
  /* position: relative; */
  /* border-width: 30px; */
  width: ${RFPercentage(50)}px;
  background-color: ${props => props.theme.colors.backgroundMedium};

  /* background-color: rgba(226, 169, 229, 0.4); */
  /* border-bottom-width: ${RFPercentage(50)}px; */
  /* border-top-width: ${RFPercentage(25)}px; */
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(15)}px 0 ${RFValue(15)}px 0;
  /* border-color: rgba(81, 67, 99, 0.5); */
  /* border-color: rgb(141, 147, 160, 0.9); */
  border-color: rgba(226, 169, 229, 0.4);
  /* border-color: red; */

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
export const EventContent = styled.View``;

export const EventInfoText = styled(Small)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightGray};
  text-align: center;
  margin-left: 5px;
`;
export const TitleTag = styled(BoldMedium)`
  color: ${({theme}) => theme.colors.lightGray};
  font-family: 'Montserrat-Medium';
  font-weight: 600;
`;
