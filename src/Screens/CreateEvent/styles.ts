import styled from 'styled-components/native';
import {
  View,
  ImageBackground,
  ImageBackgroundComponent,
  Text,
} from 'react-native';
import {ScreenMainText} from '../../components/Text';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {BoldMedium} from '../../components/Text';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: ${RFValue(20)}px;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const ImageWrapper = styled(View)`
  justify-content: center;
  height: ${RFPercentage(22.5)}px;
  width: ${RFPercentage(20)}px;
  background-color: ${props => props.theme.colors.backgroundMedium};
  align-items: center;

  border-radius: ${RFValue(25)}px;
  /* background-color: red; */
`;
export const Main = styled.View`
  width: 100%;
  height: ${RFPercentage(57.5)}px;
  display: flex;
  flex-direction: column;

  margin-bottom: ${RFValue(75)}px;
  justify-content: center;
  align-items: center;
`;
export const EventTitle = styled.Text`
  color: ${props => props.theme.colors.customWhite};
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  font-size: 22px;
  line-height: 22px;
`;
export const CreateEventInput = styled(Input)`
  border-width: 1px;
  width: ${RFPercentage(55)}px;
  border-color: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.customWhite};
  text-align: center;
`;
export const InputName = styled(BoldMedium)`
  align-self: flex-start;
  font-size: ${RFValue(18)}px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lightGray};
`;
export const FieldWrapper = styled.View`
  align-items: center;
`;

export const SaveEventData = styled(Button)`
  margin-top: ${RFValue(25)}px;
  background-color: ${({theme}) => theme.colors.purpleSmooth};
  width: ${RFPercentage(55)}px;

  border: 0;
`;
