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
