import styled from 'styled-components/native';
import {
  KeyboardAvoidingView,
  ImageBackground,
  ImageBackgroundComponent,
  Text,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
interface HomeImage extends ImageBackgroundComponent {
  resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
interface HomeImgProps extends ImageBackgroundComponent {
  resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
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
export const ImageText = styled(Text)`
  font-size: ${RFValue(22)}px;
  margin-top: ${RFPercentage(50)}px;
  color: #4a246d;
  font-family: 'Nunito-Bold';
  text-align: center;
`;
export const HomeImg = styled(ImageBackground)<HomeImgProps>`
  width: 100%;
  height: ${RFPercentage(57.5)}px;
  display: flex;
  flex-direction: column;

  /* border-radius: 9px; */
  /* border: 18px solid rgba(0, 0, 0, 0.1); */
  margin-bottom: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;
export const HomeImgText = styled(Text)`
  color: '#4a246d';
`;
