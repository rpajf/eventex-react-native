import React, {useRef} from 'react';

import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Input from '../../components/Input';

type FormData = {
  firstName: string;
  lastName: string;
};
interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const onSubmit = data => console.log(data);
  return <View >;
}
