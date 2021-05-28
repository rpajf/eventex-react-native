import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.};
`;

export const NavSection = styled.View`
  width: ${RFPercentage(15)}px;
`;