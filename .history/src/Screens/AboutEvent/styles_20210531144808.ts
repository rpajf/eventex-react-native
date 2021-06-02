import styled from 'styled-components/native';
import {View} from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 ${RFValue(15)}px 0 ${RFValue(15)}px;
  background-color: ${props => props.theme.colors.backgroundDark};
`;