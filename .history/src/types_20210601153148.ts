import {NavigatorScreenParams} from '@react-navigation/native';



export type AuthData {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  bornDate: string;
}


export type BottomNavigatorParamsList = {
  Splash: undefined;
  Tabs: undefined;
};

export type AuthNavigatorParamsList = {
  BoatInformation: AuthData;
  Definition: {word: string; definition: string};
};

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<BottomNavigatorParamsList>;
  Modal: NavigatorScreenParams<AuthNavigatorParamsList>;
};
