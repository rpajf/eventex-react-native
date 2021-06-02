import styled from 'styled-components/native';
import {View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const InfoView = styled.View`
  background-color: ${props => props.theme.colors.backgroundMedium};
  width: ${RFPercentage(55)}px;
  height: ${RFPercentage(70)}px;
  border-radius: ${RFValue(10)}px;
  padding: ${RFPercentage(4)}px;
`;
export const InfoViewWrapper = styled.View`
  flex-direction: row;
`;

export const SubmitButton = styled(Button)`
  width: ${RFPercentage(55)}px;
  height: ${RFValue(67)}px;
  padding: ${RFValue(8)}px 0;
  margin-top: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.backgroundMedium};
`;
