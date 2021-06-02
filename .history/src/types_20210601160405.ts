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
  Signin: undefined;
  AuthStackNavigator: string;
};

export type AuthNavigatorParamsList = {
  SignedParams: AuthData;
  EventPayment: undefined;
  AdmEvent: undefined;
  AuthStackNavigator: unde;

  CreateEvent: undefined;
};

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<BottomNavigatorParamsList>;
  Auth: NavigatorScreenParams<AuthNavigatorParamsList>;
};
