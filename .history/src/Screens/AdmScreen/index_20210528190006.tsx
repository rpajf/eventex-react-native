import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Container, InfoView, QrImg, SubmitButton} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

const : React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Meus Eventos</ScreenMainText>

      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};

export default AdmEventScreen;
