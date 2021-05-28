import styled from 'styled-components/native';
import {View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const InfoView = styled.View`
  background-color: ${props => props.theme.colors.purpleSmooth};
  width: ${RFPercentage(60)}px;
  height: ${RFPercentage(60)}px;
  border-radius: ${RFValue(10)}px;
  sh
`;
export const InfoViewHeader = styled.View``;
