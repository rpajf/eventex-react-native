import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import Button from '../../components/Button';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(140)}px;
  padding: ${RFValue(26)}px 10px 0 10px;
  justify-content: space-around;
  /* align-items: center; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const NavButton = styled(Button)``;

export const UsersList = styled.View`
  justify-content: space-around;
`;

export const UserStatus = styled(View)`
  background-color: ${({theme}) => theme.colors.lightGray};
  width: ${RFValue(16px)};
`;
