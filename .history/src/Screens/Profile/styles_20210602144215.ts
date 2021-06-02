import styled from 'styled-components/native';
import {ScreenMainText} from '../../components/Text';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const MainText = styled(ScreenMainText)`
  color: #ffff
`;
