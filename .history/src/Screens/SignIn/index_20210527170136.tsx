import React, {useRef, useCallback, useEffect} from 'react';
import {Form} from '@unform/mobile';
import {Scope, FormHandles} from '@unform/core';
import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    console.log(formRef.current.getFieldRef('email'));
  }, []);

  const handleSubmit = useCallback((data: {}, {reset}: {reset: () => void}) => {
    console.log(data);

    reset();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Full name" />
          <Input
            name="email"
            label="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Scope path="address">
            <Input name="street" label="Street name" />
            <Input name="zipcode" label="ZIP code" keyboardType="number-pad" />
          </Scope>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => formRef.current?.submitForm()}>
            <Text style={styles.submitButtonText}>Send</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </KeyboardAvoidingView>
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
