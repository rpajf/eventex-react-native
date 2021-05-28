import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 24px 36px;
  background-color: ${props => props.theme.colors.backgroundDark};
  padding-top: ${getStatusBarHeight() + 10}px;
`;
export const FieldWrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const FormText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  line-height: 26px;
  letter-spacing: 2px;
  color: ${() => props.theme.colors.backgroundDark};

`;
