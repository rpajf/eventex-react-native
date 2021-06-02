import styled from 'styled-components/native';
import {
  View,
  ImageBackground,
  ImageBackgroundComponent,
  Text,
} from 'react-native';
import {ScreenMainText} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface HomeImgProps extends ImageBackgroundComponent {
  resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundDark};
`;

export const ImageHeader = styled(ImageBackground)<HomeImgProps>`
  width: 100%;
  height: ${RFPercentage(40)}px;
  display: flex;
  flex-direction: column;

  /* border-radius: 9px; */
  border-bottom-color: red;
  margin-bottom: ${RFValue(75)}px;
  justify-content: center;
  align-items: center;
`;
export const EventTitle = styled.Text`
  color: ${props => props.theme.colors.customWhite};
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  font-size: 22px;
  line-height: 22px;
`;
