import React, {useRef} from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RequiredField} from '../../components/Text';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamsList} from '../../types';
import Input from '../../components/Input';
import CreateEvent from '../../Screens/CreateEvent';

import {
  Container,
  FormText,
  FieldWrapper,
  SubmitButton,
  FieldName,
} from './styles';

interface SignInFormData {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  role: string;
  bornDate: string;
  navigation: BottomTabNavigationProp<BottomNavigatorParamsList, 'SignIn'>;
}

const SignIn: React.FC<SignInFormData> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const onSubmit = data => console.log(data);
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1e2630"
        translucent={true}
      />
      <ScrollView bounces={false} style={styles.FlexOne}>
        <FormText>Adicione seus dados</FormText>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.FlexGrowOne}>
          <FieldWrapper>
            <FieldName>Nome</FieldName>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="nome"
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <FieldName>E-mail</FieldName>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="email"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <FieldName>CPF</FieldName>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="cpf"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <FieldName>Telefone de contato</FieldName>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="phone"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
          <FieldWrapper>
            <FieldName>Função</FieldName>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="role"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.name && <RequiredField>Campo obrigatório</RequiredField>}
          </FieldWrapper>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* <SelectEventSection>
        <FormText>Selecionar Evento</FormText>
      </SelectEventSection> */}

      {/* <SubmitButton onPress={handleSubmit(onSubmit)}> */}
      <SubmitButton
        onPress={() =>
          navigation.navigate('StackNavigator', {screen: 'Profile'})
        }>
        <Text>Concluir cadastro</Text>
      </SubmitButton>
    </Container>
  );
};
const styles = StyleSheet.create({
  FlexGrowOne: {
    flexGrow: 1,
  },
  FlexOne: {
    width: 350,
    flex: 1,
  },
});
export default SignIn;
