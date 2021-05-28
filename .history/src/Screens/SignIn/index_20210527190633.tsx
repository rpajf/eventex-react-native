import React, {useRef} from 'react';

import {Text, View, TextInput, Alert, StatusBar} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {
  Container,
  FormText,
  FieldWrapper,
  SelectEventSection,
  EventSectionText,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const onSubmit = data => console.log(data);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
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
        {errors.name && <Text>This is required.</Text>}
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
        {errors.name && <Text>This is required.</Text>}
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
        {errors.name && <Text>This is required.</Text>}
      </FieldWrapper>
      <Button onPress={handleSubmit(onSubmit)}>Concluir cadastro</Button>
      <SelectEventSection>
        <FormText>Selecionar Evento</FormText>
      </SelectEventSection>
    </Container>
  );
};
export default SignIn;
