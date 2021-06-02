import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Container, SubmitButton, EventSection} from './styles';
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
      <Ev>


      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};

export default EventAdminScreen;
