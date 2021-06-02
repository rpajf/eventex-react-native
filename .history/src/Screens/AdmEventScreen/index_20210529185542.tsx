import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import CustomModal from '../../components/Modal';
import {
  Container,
  SubmitButton,
  EventSection,
  EventImg,
  ImgInfo,
  EventAdminModal,
} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

import EventParticipants from '../../Screens/EventParticipants';


interface ModalProps {
  isActive: boolean;
}

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
              source={require('../../assets/img/university-event.png')}
            />
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
      <CustomModal />
    </Container>
  );
};

export default EventAdminScreen;
