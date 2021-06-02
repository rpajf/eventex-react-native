import {NavigatorScreenParams} from '@react-navigation/native';

export type TopNavigatorParamsList = {
  Splash: undefined
  Tabs: undefined
}


export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<TopNavigatorParamsList>;
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>;
};
