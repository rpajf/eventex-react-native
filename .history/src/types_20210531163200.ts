import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNavigatorParamsList = {
  Root: NavigatorScreenParams<TopNavigatorParamsList>;
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>;
};
