import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundDark};
`;

export const NavSection = styled.View`
  padding-top: ${getStatusBarHeight(false) + 5}px;

  width: ${RFPercentage(15)}px;
`;
