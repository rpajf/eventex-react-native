import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomNavigatorParamsList = {
  Splash: undefined
  Tabs: undefined
}

export type ModalNavigatorParamsList = {
  BoatInformation: BoatParams
  Definition: { word: string; definition: string }
}

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<BottomNavigatorParamsList>;
  Modal: NavigatorScreenParams<AuthNavigatorParamsList>;
};
