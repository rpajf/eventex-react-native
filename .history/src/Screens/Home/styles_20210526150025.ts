import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
export const Container = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1;
  flex-direction: column;
  behavior: 'padding';
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

// export const HomeImage = styled.ImageBackground`
//   width: 100%;
//   height: ${RFPercentage(65)}px;
// `;
