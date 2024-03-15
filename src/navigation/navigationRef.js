import React from 'react';
import {StackActions} from '@react-navigation/routers';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export const push = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

export function goBack() {
  navigationRef.current?.goBack();
}
