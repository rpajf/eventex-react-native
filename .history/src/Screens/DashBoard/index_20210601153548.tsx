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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
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

import {BottomNavigatorParamsList} from '../../types'

export interface DashboardProps{
  navigation: Bot
}

const DashBoard: React.FC = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
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
                <ButtonText>Musica</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={2}>
                <ButtonText>Empresariais</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={3}>
                <ButtonText>Cultura</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={4}>
                <ButtonText>Coaching</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={5}>
                <ButtonText>Universitários</ButtonText>
              </NavButton>
            </ScrollView>
          </View>
        </NavSection>

        <ShowEventsWrapper>
          <EventTypeText>
            Festivais de musica{'       '}
            <Text
              style={{
                fontSize: 10,
                letterSpacing: 0,
                color: '#A5A6F6',
                fontFamily: 'Roboto-Medium',
              }}>
              Ver todos
            </Text>
          </EventTypeText>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <ScrollView horizontal={true}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <EventImg
                  source={require('../../assets/img/music-event.png')}
                />
                <ImgInfo>Funk in Rio</ImgInfo>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('EventInfo')}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <EventImg
                    source={require('../../assets/img/reading-event.png')}
                  />
                  <ImgInfo>Palestra motivacional</ImgInfo>
                </View>
              </TouchableOpacity>
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
            </ScrollView>
          </View>
        </ShowEventsWrapper>
        <SignInButton onPress={() => navigation.navigate('Signin')}>
          Fazer Cadastro
        </SignInButton>
      </Container>
    </KeyboardAvoidingView>
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
