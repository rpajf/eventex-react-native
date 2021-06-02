import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

import {Container, HomeButton, ButtonText, ImageText} from './styles';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Home: React.FC = ({navigation}) => {
  const [dimensions, setDimensions] = useState({window, screen});

  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });
  return (
    <Container>
      <ImageBackground
        style={styles.image, ${dimensions.screen.height}}
        source={require('../../assets/img/homeLogo.png')}>
        <Text style={styles.text}>Seus Eventos Favoritos Aqui!</Text>
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
    // height: '75%',

    marginTop: -20,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: '55%',
    color: '#4a246d',
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
