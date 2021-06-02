import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

import {Container, HomeButton, ButtonText, ImageText, HomeImg} from './styles';

const Home: React.FC = ({navigation}) => {
  return (
    <Container>
      <HomeImg
        resizeMode="cover"
        source={require('../../assets/img/homeLogo.png')}>
        <ImageText>Seus Eventos Favoritos Aqui!</ImageText>
      </HomeImg>
      {/* <Input /> */}
      <HomeButton
        onPress={() =>
          navigation.navigate('TabNavigator', {screen: 'Dashboard'})
        }>
        <ButtonText>Começar</ButtonText>
      </HomeButton>
    </Container>
  );
};

export default Home;
