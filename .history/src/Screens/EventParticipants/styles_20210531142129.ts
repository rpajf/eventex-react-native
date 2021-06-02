import styled from 'styled-components/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View, SafeAreaView} from 'react-native';

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
  /* justify-content: flex-start; */
  flex: 1;
  align-items: flex-start;
`;

export const UserStatus = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.colors.sucess};
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  margin-right: 10px;
  border-radius: 8px;
`;
export const UserRow = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: ${RFValue(40)}px;;
  align-items: center;
  height: ${RFValue(40)}px;
`;
