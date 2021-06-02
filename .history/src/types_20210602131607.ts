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
  StackNavigator: NavigatorScreenParams<AuthNavigatorParamsList>;
  CreateEvent: undefined;
};

export type AuthNavigatorParamsList = {
  SignedParams: AuthData;
  Home: undefined;
  EventPayment: undefined;
  AdmEvent: undefined;
  StackNavigator: undefined;

  CreateEvent: undefined;
};

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<BottomNavigatorParamsList>;
  Auth: NavigatorScreenParams<AuthNavigatorParamsList>;
};
