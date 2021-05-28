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

  return (
    <>

    </>
  );
}

