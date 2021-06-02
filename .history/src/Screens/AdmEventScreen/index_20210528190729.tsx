import React from 'react';
import {StyleSheet, View, Scro} from 'react-native';

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
      <EventSection>
      <ScrollView horizontal={true}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <EventImg
                  source={require('../../assets/img/music-event.png')}
                />
                <ImgInfo>Funk in Rio</ImgInfo>
              </View>
      </EventSection>


      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};

export default EventAdminScreen;
