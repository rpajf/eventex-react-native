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
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(formRef);
  };
  return (
    <Form style={styles.container} ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="name" />
      <Input name="email" label="email"/>
    </Form>
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
