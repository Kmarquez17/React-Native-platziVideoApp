/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import Loading from './src/sections/components/loading'
import AppLayout from './src/app'

// console.disableYellowBox = true
class App extends Component {
  // state = {
  //   suggestionList: [],
  //   CategoryList: [],
  // }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
        <AppLayout/>          
        </PersistGate>
      </Provider>

    );
  }
}

export default App