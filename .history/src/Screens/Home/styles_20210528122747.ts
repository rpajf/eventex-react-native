import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const HomeButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.emptyButtonBorder};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.purpleBright};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  text-transform: uppercase;
`;
export const ImageText = styled.Text`
font-size: ${RFValue(24)}; 
  margin-top: ${RFPercentage(30)}px;
  color: '#4a246d'
`
// export const HomeImage = styled.ImageBackground`
//   width: 100%;
text: {
  marginTop: '55%',
  color: '#4a246d',
  fontSize: 24,
  fontFamily: 'Nunito-Bold',
  fontWeight: 'bold',
  textAlign: 'center',
},
//   height: ${RFPercentage(65)}px;
// `;
