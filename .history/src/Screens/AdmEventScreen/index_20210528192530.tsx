import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {
  Container,
  SubmitButton,
  EventSection,
  EventImg,
  ImgInfo,
} from './styles';
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
            <EventImg source={require('../../assets/img/music-event.png')} />
            <ImgInfo>Funk in Rio</ImgInfo>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg source={require('../../assets/img/music-event.png')} />
            <ImgInfo>Funk in Rio</ImgInfo>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg source={require('../../assets/img/reading-event.png')} />
            <ImgInfo>Funk in Rio</ImgInfo>
          </View>
        </ScrollView>
      </EventSection>
    </Container>
  );
};

export default EventAdminScreen;
