import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './navigation/index';
import {persistor, store} from './redux/store';

enableScreens();

export function App() {
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
