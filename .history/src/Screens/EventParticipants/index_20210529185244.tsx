import React from 'react';
import {View} from 'react-native';

import { Container, Header } from './styles';

import {ScreenMainText} from '../../components/Text';

const EventParticipants: React.FC = () => {
  return (<Container>
    <Header>
      <ScreenMainText></ScreenMainText>
    </Header>
  </Container>);
}
