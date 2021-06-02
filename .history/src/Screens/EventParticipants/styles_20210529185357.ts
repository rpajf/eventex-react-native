import styled from 'styled-components/native';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  align-i
  background-color: ${({theme}) => theme.colors.backgroundLight};
`;
