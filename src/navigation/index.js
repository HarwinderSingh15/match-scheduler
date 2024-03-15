import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './AuthNavigator';
import {theme} from '@/theme';
import {HomeNavigator} from './HomeNavigator';
import {navigationRef} from './navigationRef';

export function RootNavigator() {
  const user = useSelector(s => s.auth.user);
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme[scheme]}>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
