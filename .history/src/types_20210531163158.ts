import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNavigatorParamsList = {
  : NavigatorScreenParams<TopNavigatorParamsList>;
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>;
};
