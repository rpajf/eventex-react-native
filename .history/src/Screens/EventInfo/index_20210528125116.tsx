import React from 'react';
import {View} from 'react-native';

import { Container } from './styles';
import {ScreenMainText} from '../../components/Text'

const EventInfo: React.FC = () => {
  return <Container>
    <ScreenMainText>Resumo</ScreenMainText>
  </Container>;
};

export default EventInfo;
