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
} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header>
        <MaterialCommunity name="arrow-left-bold" size={25} color="#fff" />
      </Header>
      <ImageWrapper>
        <ImageHeader source={require('../../assets/img/show.jpg')} />
        <EventTitle>Tomorrowland</EventTitle>
        <View style={styles.rowWrapper}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <EvilIcon name="calendar" size={25} color="#989eb5" />

            <EventInfoText>17-18 july</EventInfoText>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <AntiDesign name="clockcircleo" size={22} color="#989eb5" />
            <EventInfoText>Starts at 17:00pm</EventInfoText>
            
          </View>
          {/* <EventInfoText /> */}
        </View>
      </ImageWrapper>
      <EventContent />
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
