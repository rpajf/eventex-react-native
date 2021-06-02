import styled from 'styled-components/native';
import {KeyboardAvoidingView, ImageBackground} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const HomeButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.emptyButtonBorder};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.purpleBright};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  text-transform: uppercase;
`;
export const ImageText = styled.Text`
  font-size: ${RFValue(22)};
  margin-top: ${RFPercentage(30)}px;
  color: '#4a246d';
  font-family: 'Nunito-Bold';
  text-align: center;
`;
export const HomeImg = styled(ImageBackground)`
  width: 100%;
  height: ${RFPercentage(50)}px;
  display: flex;
  flex-direction: column;
  resizemode: 'cover';
  /* border-radius: 9px; */
  /* border: 18px solid rgba(0, 0, 0, 0.1); */

  justify-content: center;
  align-items: center;

  margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0;
`;
