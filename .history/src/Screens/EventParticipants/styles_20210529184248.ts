import styled from 'styled-components/native';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;

  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: !;

`