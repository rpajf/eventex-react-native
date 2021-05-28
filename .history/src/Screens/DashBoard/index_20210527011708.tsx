import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection, EventSection, EventTypes} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <SearchBar />
        <View style={styles.searchEventsWrapper}>
          <ScrollView horizontal style={styles.scrollView}>
            <TouchableOpacity style={styles.navigateButton}>
              <Text>Eventos de musica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateButton}>
              <Text>Eventos de musica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateButton}>
              <Text>Eventos de musica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateButton}>
              <Text>Eventos de musica</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateButton}>
              <Text>Eventos de musica</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </NavSection>
      <EventSection />
    </Container>
  );
};
const styles = StyleSheet.create({
  navigateButton: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#e6e6e6',
  },
  searchEventsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default DashBoard;
