import React from 'react';
import {View} from 'react-native';
im;

// import { Container } from './styles';

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabNavigator" component={tabNav} />
        <Stack.Screen name="AboutEvent" component={AboutEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;
