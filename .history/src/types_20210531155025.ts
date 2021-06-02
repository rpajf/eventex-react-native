import { NavigatorScreenParams } from '@react-navigation/native'


export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TopNavigatorParamsList>;
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>;
};
