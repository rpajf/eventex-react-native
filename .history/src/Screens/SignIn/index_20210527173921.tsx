import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {Scope} from '@unform/core';
import {FormHandles} from '@unform/core';
import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

export default function MyForm() {
  const formRef = useRef<FormHandles>(null);
  function handleSubmit(data, {reset}) {
    console.log(data);

    reset();
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Form style={styles.container} ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="name" />
        <Input name="email" label="email" autoCorrect={false} />
        <Scope path="address">
          <Input name="street" label="Street name" />
          <Input name="zipcode" label="ZIP code" keyboardType="number-pad" />
        </Scope>
      </Form>
    </>
  );
}

