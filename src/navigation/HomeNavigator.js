import React from 'react';
import {NAVIGATION} from '../constants/navigation';
import {Home} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} options={{}} component={Home} />
    </Stack.Navigator>
  );
}
