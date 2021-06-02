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
  EventInfo: undefined;
  SignIn: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  CreateEvent: undefined;
};

export type StackNavigatorParamsList = {
  // SignedParams: AuthData;

  EventPayment: undefined;
  AdmEvent: undefined;
  StackNavigator: undefined;
  CreateEvent: undefined;
};

export type RootNavigatorParamsList = {
  Home: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  TabNavigator: NavigatorScreenParams<BottomNavigatorParamsList>;
};
