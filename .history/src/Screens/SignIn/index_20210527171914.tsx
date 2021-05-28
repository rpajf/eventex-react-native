import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {Scope} from '@unform/core';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },

  logo: {
    width: 120,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  submitButton: {
    backgroundColor: '#111',
    border: 0,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
  },

  submitButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
});
