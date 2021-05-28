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
  box-shadow: {0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)}
})

export default EventInfo;
