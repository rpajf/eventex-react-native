import React from 'react';
import {StyleSheet, Button, Text, TouchableOpacity, View} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection, EventSection, EventTypes} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <SearchBar />
        <View style={styles.searchEventsWrapper}>
          <TouchableOpacity style={styles.navigateButton}>
            <Text>Eventos de musica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigateButton}>
            <Text>Eventos de musica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigateButton}>
            <Text>Eventos de musica</Text>
          </TouchableOpacity>
        </View>
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
  searchEventsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DashBoard;
