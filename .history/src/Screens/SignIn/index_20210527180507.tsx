import React, {useRef} from 'react';

import {Text, View, TextInput, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Container} from './styles';
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
      <Button onPress={handleSubmit(onSubmit)}>Concluir cadastro</Button>
    </Container>
  );
};
export default SignIn;
