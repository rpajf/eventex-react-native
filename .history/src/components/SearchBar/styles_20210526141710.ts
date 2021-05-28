import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  
  background-color: ${({theme}) => theme.colors.primary};
`;
