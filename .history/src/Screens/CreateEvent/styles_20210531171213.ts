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
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const ImageHeader = styled.ImageBackground``;
export const Text = styled(ScreenMainText)``;
