import styled from 'styled-components/native';
import {ScreenMainText, Small} from '../../components/Text';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  align-items: center;
`;

export const UserProfile = styled.View``
export const MainText = styled(ScreenMainText)`
  color: #ffff;
`;

export const UserData = styled(Small)``;
export const FieldWrapper = styled.View`
  flex-direction: row;
`;
