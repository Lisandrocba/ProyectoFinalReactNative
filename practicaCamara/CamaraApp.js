import React from 'react';
import { Provider } from 'react-redux'

import store from './src/store/index'

// navigation
import MainNavigator from './src/navigation/index'

export default function CamaraApp() {
  return (<Provider store={store}><MainNavigator /></Provider>);
}
