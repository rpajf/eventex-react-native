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
          <EvilIcon name="calendar" size={25} color="#fff" />

          <EventInfoText>17-18 july</EventInfoText>

          <AntiDesign name="clockcircleo" size={25} color="#fff" />

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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default CreateEvent;
