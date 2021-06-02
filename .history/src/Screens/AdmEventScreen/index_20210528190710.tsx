import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Container, SubmitButton} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

const EventAdminScreen: React.FC = () => {
  return (
    <Container>
      <ScreenMainText
        style={{
          textTransform: 'none',
        }}>
        Meus Eventos
      </ScreenMainText>


      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};

export default EventAdminScreen;
