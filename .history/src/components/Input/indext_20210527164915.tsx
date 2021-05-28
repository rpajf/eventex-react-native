import React, {useRef, useEffect} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
}

interface InputReference {
  value: string;
  focus?: () => void;
}

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
  const {fieldName, registerField, defaultValue = '', error} = useField(name);

  const inputElementRef = useRef<TextInput>(null);
  const inputValueRef = useRef<InputReference>({
    value: defaultValue,
    focus: () => {
      if (inputElementRef.current) {
        inputElementRef.current.focus();
      }
    },
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      setValue(ref: InputReference, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
      getValue(ref: InputReference) {
        return ref.value;
      },
    });
  }, [fieldName, registerField, inputElementRef]);

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
    fontSize: 15,
    color: '#444',
  },
});

export default Input;
