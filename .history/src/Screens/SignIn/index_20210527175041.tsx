import React, {useRef} from 'react';

import {Text, View, TextInput, Button, Alert} from 'react-native';
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
    </Container>
  );
};
export default SignIn;
