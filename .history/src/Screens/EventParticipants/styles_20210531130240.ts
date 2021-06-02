import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import Button from '../../components/Button';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.lightGray};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.purpleSmooth};
`;
export const NavButton = styled(Button)``;
