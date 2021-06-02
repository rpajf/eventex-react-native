import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import Button from '../../components/Button';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  padding: ${RFValue(26)}px;
  align-items: center;
  border-bottom: 5px;
  background-color: ${({theme}) => theme.colors.purpleSmooth};
`;
export const NavButton = styled(Button)``;
