import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header>
        <MaterialCommunity name="arrow-left-bold" size={25} color="#b5bbd4" />
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
              <EvilIcon name="calendar" size={27.5} color="#989eb5" />

              <EventInfoText>17-18 july</EventInfoText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntiDesign name="clockcircleo" size={22} color="#989eb5" />
              <EventInfoText>Starts at 17:00pm</EventInfoText>
            </View>

            {/* <EventInfoText /> */}
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TitleTag style={{marginBottom: -5}}>Descrição</TitleTag>
            <EventInfoText style={{textAlign: 'justify'}}>
              Um evento de música eletronica conhecido globalment
            </EventInfoText>
          </View>
        </EventContent>
      </ImageWrapper>
    </Container>
  );
};
const styles = StyleSheet.create({
  rowWrapper: {
    display: 'flex',

    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CreateEvent;
