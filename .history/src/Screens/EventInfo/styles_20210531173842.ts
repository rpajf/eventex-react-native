import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import {ScreenMainText} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const ImageHeader = styled(Image)`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(40)}px;
  display: flex;
  flex-direction: column;

  margin-bottom: ${RFValue(75)}px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: ${RFValue(8)}px;
  /* border-bottom-color: rgba(13, 13, 15, 0.4);
  border-bottom-width: ${RFValue(75)}px;
  border-bottom-right-radius: 10px;
  border-bottom-right-radius: 10px; */
`;
export const ImageWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  background: rgba(140, 82, 255, 0.3);
`;
export const EventTitle = styled.Text`
  color: ${props => props.theme.colors.customWhite};
  /* color: yellow; */
  font-family: 'Roboto-Medium';
  margin-top: ${RFValue(120)}px;

  letter-spacing: 1px;
  font-size: 22px;
  line-height: 22px;
`;
