import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Container, InfoView, QrImg, SubmitButton} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

const AdmEventScreen: React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Meus Eventos</ScreenMainText>

      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default AdmEventScreen;
