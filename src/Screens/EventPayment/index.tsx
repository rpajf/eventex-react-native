import React from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../types';
import {Container, InfoView, QrImg, SubmitButton} from './styles';
import {ScreenMainText, BoldMedium, Small} from '../../components/Text';

export interface EventInfo {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'EventPayment'>;
}

const EventInfo: React.FC<EventInfo> = ({navigation}) => {
  return (
    <Container>
      <ScreenMainText>Pagamento do evento</ScreenMainText>

      <InfoView>
        <Small
          style={{
            color: '#969cb2',
          }}>
          22.08.21
        </Small>
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
