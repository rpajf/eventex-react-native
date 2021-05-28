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
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
    0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;
export const InfoViewHeader = styled.Vi
