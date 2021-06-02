import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import {Container, InfoView, QrImg, SubmitButton} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

const EventInfo: React.FC = () => {
  return (
    <Container>
      <ScreenMainText>Resumo</ScreenMainText>

      <InfoView>
        <Small>22.08.21</Small>
        <BoldMedium>Ticket - Evento</BoldMedium>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}>
          <Small
            style={{
              color: '#969cb2',
            }}>
            Nome
          </Small>
          <Small
            style={{
              color: '#969cb2',
            }}>
            CPF
          </Small>
          <Small
            style={{
              color: '#969cb2',
            }}>
            E-mail
          </Small>
          <Small
            style={{
              color: '#969cb2',
            }}>
            Telefone
          </Small>
        </View>
        <Text
          style={{
            fontSize: 18,
            textTransform: 'uppercase',
            lineHeight: 20,
            marginBottom: 20,
            fontFamily: 'Roboto-Bold',
            color: '#969cb2',
            textAlign: 'center',
          }}>
          qr code
        </Text>
        <QrImg source={require('../../assets/img/qrcode-img.png')} />
      </InfoView>
      <SubmitButton>Confirmar</SubmitButton>
    </Container>
  );
};

export default EventInfo;
