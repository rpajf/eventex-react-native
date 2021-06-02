import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';
import {TouchableOpacity, Text} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 180px;
  height: 44px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #a5a6f6;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-family: 'Roboto-Medium';

  color: ${({theme}) => theme.colors.pup};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
`;
