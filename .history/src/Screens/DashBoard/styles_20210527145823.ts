import styled from 'styled-components/native';
import {TouchableHighlight} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${RFPercentage(10)}px;
`;
export const NavSection = styled.View`
  padding-top: ${getStatusBarHeight(false)-10}px;
  display: flex;
  flex-direction: column;
  height: ${RFPercentage(15)}px;
`;

export const EventTypes = styled.Button`
  width: 180px;
  height: 44px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #a5a6f6;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
export const EventSection = styled.View`
  height: ${RFPercentage(30)}px;
  background-color: ${props => props.theme.colors.purpleBright};
`;
export const NavButton = styled(TouchableHighlight)`
  width: 130px;
  height: 40px;
  padding: 6px 0;
  align-items: center;
  justify-content: center;
  margin-right: ${RFPercentage(3)}px;
  border-radius: 8px;
  /* background-color: ${({theme}) => theme.colors.purpleSmooth}; */
  background-color: #2a2e5b;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Bold';
  color: ${({theme}) => theme.colors.customWhite};
`;
