import React from 'react';
import {NAVIGATION} from '../constants/navigation';
import {Home} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MatchCalendar from '@/screens/MatchCalender/MatchCalendar';
import MatchDetails from '@/screens/MatchDetails/MatchDetails';
import ViewMatchSchedule from '@/screens/ViewMatchSchedule/ViewMatchSchedule';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} options={{}} component={Home} />
      <Stack.Screen name={NAVIGATION.calendar} component={MatchCalendar} />
      <Stack.Screen name={NAVIGATION.matchDetails} component={MatchDetails} />
      <Stack.Screen
        name={NAVIGATION.viewMatchSchedule}
        component={ViewMatchSchedule}
      />
    </Stack.Navigator>
  );
}
