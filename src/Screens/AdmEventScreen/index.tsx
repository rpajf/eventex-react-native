import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
// import CustomModal from '../../components/Modal';
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
  const [isParticipantsModalOpen, setParticipantsModalOpen] =
    useState<boolean>(true);

  function handleOpenParticipantsModal() {
    setParticipantsModalOpen(true);
  }
  function handleCloseParticipantsModal() {
    setParticipantsModalOpen(false);
  }

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
            <TouchableOpacity onPress={handleOpenParticipantsModal}>
              <EventImg
                source={require('../../assets/img/university-event.png')}
              />
            </TouchableOpacity>
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
      {/* <CustomModal /> */}
      <Modal visible={isParticipantsModalOpen}>
        <EventParticipants closeModal={handleCloseParticipantsModal} />
      </Modal>
    </Container>
  );
};

export default EventAdminScreen;
