import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(28)}px 36px 0;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const FieldWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: ${RFValue(8)}px 0 ${RFValue(12)}px 0;
`;
export const FormText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  line-height: ${RFValue(38)}px;
  margin-bottom: ${RFPercentage(5)}px;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.lightGray};
`;
export const SelectEventSection = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: ${RFValue(10)}px;
  height: ${RFPercentage(10)}px;
`;

export const EventSectionText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  line-height: 2px;
  margin-bottom: ${RFPercentage(5)}px;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.lightGray};
`;
export const EventSectionRow = styled.View``;
export const EventImg = styled.Image`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  border-radius: 10px;
  border: 22px solid rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;

  margin-right: 10px;
`;
export const SubmitButton = styled(Bu)