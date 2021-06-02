import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
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

const CreateEvent: React.FC = ({navigation: {goBack}}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialCommunity name="arrow-left-bold" size={25} color="#b5bbd4" />
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
              <EvilIcon name="calendar" size={27.5} color="#8f5dd6" />

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

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TitleTag style={{}}>Descrição</TitleTag>
            <EventInfoText style={{textAlign: 'justify'}}>
              Um evento de música eletronica conhecido globalmente conhecido,
              sediado...
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
    width: 270,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default CreateEvent;
