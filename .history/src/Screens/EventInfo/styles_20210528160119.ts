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
  height: ${RFPercentage(60)}px;
  border-radius: ${RFValue(10)}px;
  padding: ${RFPercentage(4)}px;
`;
export const InfoViewWrapper = styled.View`
  flex-direction: row;
`;

export const QrImg = styled.Image`
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
  border-radius: 12px;

  justify-content: center;
  align-items: center;

  /* margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 0; */
`;
export const NavButton = styled(B)`
  width: ${RFValue(130)}px;
  height: ${RFValue(40)}px;
  padding: ${RFValue(8)}px 0;
  align-items: center;
  justify-content: center;
  margin-right: ${RFPercentage(3)}px;
  border-radius: 8px;
  /* background-color: ${({theme}) => theme.colors.purpleSmooth}; */
  background-color: #2a2e5b;
`;
