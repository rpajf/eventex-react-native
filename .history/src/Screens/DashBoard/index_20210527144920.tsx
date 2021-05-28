import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {
  Container,
  NavSection,
  EventSection,
  EventTypes,
  ButtonText,
  NavButton,
} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1e2630"
        translucent={true}
      />
      <NavSection>
        <SearchBar />
        <View style={styles.searchEventsWrapper}>
          <ScrollView horizontal={true}>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={1}>
              <ButtonText>Eventos de musica</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={2}>
              <ButtonText>Eventos de musica</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={3}>
              <ButtonText>Eventos de musica</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={1}>
              <ButtonText>Eventos de musica</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={1}>
              <ButtonText>Eventos de musica</ButtonText>
            </NavButton>
            {/* <TouchableOpacity style={styles.navigateButton}>
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
            </TouchableOpacity> */}
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
    marginRight: 10,
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
    // marginVertical: 30,
  },
});

export default DashBoard;
