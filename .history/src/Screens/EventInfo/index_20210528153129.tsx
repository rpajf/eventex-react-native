import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, InfoView} from './styles';
import {ScreenMainText} from '../../components/Text';

const EventInfo: React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Resumo</ScreenMainText>
      <InfoView />
    </Container>
  );
};
const styles = StyleSheet.create({
  boxShadow: shadowColor "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  
  elevation: 9,
})

export default EventInfo;
