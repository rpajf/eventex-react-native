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
  boxShadow: {}
})

export default EventInfo;
