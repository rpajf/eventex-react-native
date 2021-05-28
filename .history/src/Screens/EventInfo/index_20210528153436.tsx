import React from 'react';
import {StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Container, InfoView} from './styles';
import {ScreenMainText} from '../../components/Text';

const EventInfo: React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Resumo</ScreenMainText>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
        }}>
        <InfoView styles={styles.boxShadow} />
      </DropShadow>
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
