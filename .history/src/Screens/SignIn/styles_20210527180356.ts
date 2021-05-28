import styled from 'styled-components/native';

export const Container = styled.View`
import {getStatusBarHeight} from 'react-native-status-bar-height';

  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 24px 36px;
  background-color: ${props => props.theme.colors.backgroundDark};
`;
