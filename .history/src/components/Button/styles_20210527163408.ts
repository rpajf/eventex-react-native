import styled from 'styled-components';
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
  letter-spacing: 1px;
  color: #ffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  text-transform: uppercase;
`;
