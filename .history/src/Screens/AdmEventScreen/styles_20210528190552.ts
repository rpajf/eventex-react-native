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
export const EventImg = styled.Image`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(30)}px;
  border-radius: 9px;
  border: 18px solid rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;

  margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0;
`;