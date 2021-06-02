import React, {useRef} from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RequiredField} from '../../components/Text';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamsList} from '../../types';
import Input from '../../components/Input';

import {Container, FormText, FieldWrapper, SubmitButton} from './styles';

interface SignInFormData {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  bornDate: string;
  navigation: BottomTabNavigationProp<BottomNavigatorParamsList, 'SignIn'>;
}

const SignIn: React.FC<SignInFormData> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const onSubmit = data => console.log(data);
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.FlexGrowOne}>
      <Container>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#1e2630"
          translucent={true}
        />
        <FormText>Adicione seus dados</FormText>
        <ScrollView bounces={false} style={styles.FlexOne}>
          <FieldWrapper>
            <Text
              style={{
                fontSize: 16,
                letterSpacing: 0,

                color: '#969cb2',
              }}>
              Nome
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <Text
              style={{
                fontSize: 16,
                letterSpacing: 0,

                color: '#969cb2',
              }}>
              E-mail
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="cpf"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <Text
              style={{
                fontSize: 16,
                letterSpacing: 0,

                color: '#969cb2',
              }}>
              CPF
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <Text
              style={{
                fontSize: 16,
                letterSpacing: 0,

                color: '#969cb2',
              }}>
              Telefone de contato
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
        </ScrollView>
        {/* <SelectEventSection>
        <FormText>Selecionar Evento</FormText>
      </SelectEventSection> */}
        <TouchableOpacity>
          <SubmitButton onPress={handleSubmit(onSubmit)}>
            Concluir cadastro
          </SubmitButton>
        </TouchableOpacity>
      </Container>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  FlexGrowOne: {
    flexGrow: 1,
  },
  FlexOne: {
    width: 350,
    flex: 1,
  },
});
export default SignIn;
