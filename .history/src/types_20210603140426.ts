import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthData = {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  bornDate: string;
};

export type BottomNavigatorParamsList = {
  Dashboard: undefined;
  Tabs: undefined;
  SignIn: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  CreateEvent: undefined;
};

export type StackNavigatorParamsList = {
  EventInfo: undefined;
  EventPayment: undefined;
  AdmEvent: undefined;
  StackNavigator: undefined;
  CreateEvent: undefined;
  Profile: undefined;
};

export type RootNavigatorParamsList = {
  Home: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  TabNavigator: NavigatorScreenParams<BottomNavigatorParamsList>;
};
