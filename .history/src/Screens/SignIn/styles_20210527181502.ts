import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px 36px;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
export const FieldWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: ${RFValue(20)}px 0 ${RFValue(15)}px 0;
`;
export const FormText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  line-height: 26px;
  margin-bottom: ${RFPercentage(10)}px;
  letter-spacing: 2px;
  color: ${({theme}) => theme.colors.lightGray};
`;
