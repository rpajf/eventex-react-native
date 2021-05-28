import styled from 'styled-components/native';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const HomeImage = styled.ImageBackground`
  width: 100%;
  height: ${RFPercentage(65)}px;
  res
`;
