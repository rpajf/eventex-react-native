import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import Button from '../../components/Button';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  /* align-items: center; */

  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(25)}px;
  padding: ${RFValue(30)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(30)}px;
  justify-content: space-around;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const NavButton = styled(Button)``;

export const UsersList = styled.View`
  /* justify-content: center; */
  align-items: center;
`;

export const UserStatus = styled(View)`
  background-color: ${({theme}) => theme.colors.sucess};
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  border-radius: 8px;
`;
