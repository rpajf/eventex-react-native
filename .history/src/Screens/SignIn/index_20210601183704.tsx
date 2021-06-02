import React, {useRef} from 'react';

import {Text, View, TextInput, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RequiredField} from '../../components/Text';

import Input from '../../components/Input';

import {Container, FormText, FieldWrapper, SubmitButton} from './styles';

interface SignInFormData {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  bornDate: string;
}

const SignIn: React.FC<SignInFormData> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const onSubmit = data => console.log(data);
  return (
    <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}style= {styles.FlexGrowOne}>
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1e2630"
        translucent={true}
      />
      <FormText>Adicione seus dados</FormText>
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
      {/* <SelectEventSection>
        <FormText>Selecionar Evento</FormText>
      </SelectEventSection> */}
      <SubmitButton onPress={handleSubmit(onSubmit)}>
        Concluir cadastro
      </SubmitButton>
    </Container>
    </>
  );
};
export default SignIn;
