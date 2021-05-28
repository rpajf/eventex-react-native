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
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${RFPercentage(10)}px;
`;
export const NavSection = styled.View`
  /* padding-top: ${getStatusBarHeight(false) + 50}px; */
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
