import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primary};
`;
