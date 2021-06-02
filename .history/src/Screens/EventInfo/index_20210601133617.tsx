import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  ImageHeader,
  EventTitle,
  ImageWrapper,
  Header,
  EventContent,
  EventInfoText
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
        <View>
          <EventInfoText></EventInfoText>
        </View>
      </ImageWrapper>
      <EventContent>


      </EventContent>
    </Container>
  );
};

export default CreateEvent;
