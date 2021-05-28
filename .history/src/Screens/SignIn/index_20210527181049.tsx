import React, {useRef} from 'react';

import {Text, View, TextInput, Alert, StatusBar} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Container, FormText, FieldWrapper} from './styles';
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
      <FormText>Adicione suas informações</FormText>
      <FieldWrapper>
        <Text
          style={{
            fontSize: 12,
            letterSpacing: 0,
            textTransform: 'lowercase',
            color: '#969cb2',
          }}>
          Ver todos
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
    </Container>
  );
};
export default SignIn;
