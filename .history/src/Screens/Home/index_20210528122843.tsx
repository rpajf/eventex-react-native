import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import Input from '../../components/SearchBar';

import {Container, HomeButton, ButtonText, ImageText} from './styles';

const Home: React.FC = ({navigation}) => {
  return (
    <Container>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/img/homeLogo.png')}>
        {/* <Text style={styles.text}>Seus Eventos Favoritos Aqui!</Text> */}
        <I>
      </ImageBackground>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    display: 'flex',

    flexDirection: 'column',
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: '55%',
    color: '#4a246d',
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
