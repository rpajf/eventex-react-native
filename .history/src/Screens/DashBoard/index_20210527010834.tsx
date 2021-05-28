import React from 'react';
import {StyleSheet, Button, Text, TouchableOpacity} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection, EventSection, EventTypes} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <SearchBar />
        <TouchableOpacity style={{styles.navigateButton}}>
          <Text>Eventos de musica</Text>
        </TouchableOpacity>
      </NavSection>
      <EventSection />
    </Container>
  );
};
const styles = StyleSheet.create({
  navigateButton: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#e6e6e6',

  },
});

export default DashBoard;
