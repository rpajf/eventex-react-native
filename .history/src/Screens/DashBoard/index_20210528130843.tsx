import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import {color} from 'react-native-reanimated';

import SearchBar from '../../components/SearchBar';

import {
  Container,
  NavSection,
  EventImg,
  ButtonText,
  SignInButton,
  NavButton,
  EventTypeText,
  ShowEventsWrapper,
  ImgInfo,
} from './styles';

const DashBoard: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1e2630"
        translucent={true}
      />
      <NavSection>
        <SearchBar />
        <View style={styles.searchEventsWrapper}>
          <ScrollView horizontal={true}>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={1}>
              <ButtonText>Musica</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={2}>
              <ButtonText>Empresariais</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={3}>
              <ButtonText>Cultura</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={4}>
              <ButtonText>Cancelamento</ButtonText>
            </NavButton>
            <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={5}>
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

      <ShowEventsWrapper>
        <EventTypeText>
          Festivais de musica{'       '}
          <Text
            style={{
              fontSize: 12,
              letterSpacing: 0,
              textTransform: 'lowercase',
              color: '#969cb2',
            }}>
            Ver todos
          </Text>
        </EventTypeText>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg source={require('../../assets/img/music-event.png')} />
            <ImgInfo>Funk in Rio</ImgInfo>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg source={require('../../assets/img/reading-event.png')} />
            <ImgInfo>Palestra motivacional</ImgInfo>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg
              source={require('../../assets/img/university-event.png')}
            />
            <ImgInfo>Ciencias sem fronteira</ImgInfo>
          </View>
        </View>
      </ShowEventsWrapper>
      <SignInButton onPress={() => navigation.navigate('Signin')}>
        Fazer Cadastro
      </SignInButton>
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
  image: {
    width: '130',
    height: '140',
  },
});

export default DashBoard;
