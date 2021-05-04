import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';

import {DetailsListScreen} from '../screens/DetailsListScreen';
import {DetailsIndicatorScreen} from '../screens/DetailsIndicatorScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsListScreen: {codeId: string; itemName: string}
};
const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsListScreen" component={DetailsListScreen} />
      <Stack.Screen
        name="DetailsIndicatorScreen"
        component={DetailsIndicatorScreen}
      />
    </Stack.Navigator>
  );
};
