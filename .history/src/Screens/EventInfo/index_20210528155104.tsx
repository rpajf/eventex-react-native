import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Container, InfoView} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

const EventInfo: React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Resumo</ScreenMainText>

      <InfoView>
        <Small>22.08.21</Small>
        <BoldMedium>Ticket - Evento</BoldMedium>
        <View>
          <Small></Small>
          <Small></Small>
          <Small></Small>
          <Small></Small>
        </View>
      </InfoView>
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

export default EventInfo;
