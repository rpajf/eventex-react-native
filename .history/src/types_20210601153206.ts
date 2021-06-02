import {NavigatorScreenParams} from '@react-navigation/native';



export type AuthData {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  bornDate: string;
}


export type BottomNavigatorParamsList = {
  Dashboard: undefined;
  Tabs: undefined;
};

export type AuthNavigatorParamsList = {
  SignedParams: AuthData;

};

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<BottomNavigatorParamsList>;
  Modal: NavigatorScreenParams<AuthNavigatorParamsList>;
};
