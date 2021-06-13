import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import SearchBar from '../../components/SearchBar';
import {BottomNavigatorParamsList} from '../../types';

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

export interface DashboardProps {
  navigation: BottomTabNavigationProp<BottomNavigatorParamsList, 'Dashboard'>;
}

const Dashboard: React.FC<DashboardProps> = ({navigation}) => {
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
                <ButtonText>Music</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={2}>
                <ButtonText>Business</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={3}>
                <ButtonText>Culture</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={4}>
                <ButtonText>Coaching</ButtonText>
              </NavButton>
              <NavButton onPress={() => {}} underlayColor="#A5A6F6" key={5}>
                <ButtonText>University</ButtonText>
              </NavButton>
            </ScrollView>
          </View>
        </NavSection>

        <ShowEventsWrapper>
          <EventTypeText>Most accessed events</EventTypeText>

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
                  source={require('../../assets/img/festival-green.jpg')}
                />
                <ImgInfo>Funk in Rio</ImgInfo>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('StackNavigator', {screen: 'EventInfo'})
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <EventImg
                    source={require('../../assets/img/reading-event.png')}
                  />
                  <ImgInfo>Motivacional speech</ImgInfo>
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
                <ImgInfo>Exchange program</ImgInfo>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <EventImg source={require('../../assets/img/tech2.jpg')} />
                <ImgInfo>Vendas 5.0</ImgInfo>
              </View>
            </ScrollView>
          </View>
        </ShowEventsWrapper>
        <SignInButton onPress={() => navigation.navigate('SignIn')}>
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

export default Dashboard;
