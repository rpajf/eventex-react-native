import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundDark};
`;

export const NavSection = styled.View`
  /* padding-top: ${getStatusBarHeight(false) + 50}px; */
  display: flex;
  flex-direction: row;
  height: ${RFPercentage(15)}px;
`;

export const Event
export const EventSection = styled.View`
  height: ${RFPercentage(30)}px;
  background-color: ${props => props.theme.colors.purpleBright};
`;
