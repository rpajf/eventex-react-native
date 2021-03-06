import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigatorParamsList} from '../../types';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntiDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  ImageHeader,
  EventTitle,
  ImageWrapper,
  Header,
  EventContent,
  EventInfoText,
  TitleTag,
  BuyButton,
} from './styles';

export interface EventInfoProps {
  navigation: St<StackNavigatorParamsList, 'EventInfo'>;
}

const CreateEvent: React.FC<EventInfoProps> = ({navigation}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunity
              name="arrow-left-bold"
              size={25}
              color="#b5bbd4"
            />
          </TouchableOpacity>
        </Header>
        <ImageWrapper>
          <ImageHeader source={require('../../assets/img/show.jpg')} />
          <EventTitle>Tomorrowland</EventTitle>
          <EventContent>
            <View style={styles.rowWrapper}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <EvilIcon name="calendar" size={27.5} color="#9e6fdf" />

                <EventInfoText>17-18 july</EventInfoText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntiDesign name="clockcircleo" size={22} color="#9e6fdf" />
                <EventInfoText>Starts at 17:00pm</EventInfoText>
              </View>

              {/* <EventInfoText /> */}
            </View>
            <View
              style={{
                flexDirection: 'column',

                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TitleTag style={{}}>Descri????o</TitleTag>
              <EventInfoText style={{textAlign: 'justify'}}>
                Um evento de m??sica eletronica conhecido globalmente conhecido,
                sediado...
              </EventInfoText>
            </View>
          </EventContent>
        </ImageWrapper>
        <BuyButton
          onPress={() => {
            navigation.navigate('StackNavigator', {screen: 'EventPayment'});
          }}>
          <Text style={{color: '#d4c9e2'}}>Quero ir neste evento</Text>
        </BuyButton>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  rowWrapper: {
    display: 'flex',

    flexDirection: 'row',
    width: 270,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default CreateEvent;
