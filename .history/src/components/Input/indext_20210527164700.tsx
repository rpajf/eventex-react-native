import React, {useRef, useEffect, useCallback} from 'react';
import {Text, TextInput} from 'react-native';
import {useField} from '@unform/core';
import { TextInputProps } from 'react-native';
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: Record<string, unknown>;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

function Input({name, label, onChangeText, ...rest}) {
  const inputRef = useRef(null);

  const {fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) {
          return inputRef.current.value;
        }

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: value});
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: ''});
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) {
        inputRef.current.value = text;
      }

      if (onChangeText) {
        onChangeText(text);
      }
    },
    [onChangeText],
  );

  return (
    <>
      {label && <Text>{label}</Text>}

      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
}

export default Input;
