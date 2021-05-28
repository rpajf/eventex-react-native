import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {Button, } from '../../components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const HomeButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.backgroundDark}; ;
`;
// export const HomeImage = styled.ImageBackground`
//   width: 100%;
//   height: ${RFPercentage(65)}px;
// `;
