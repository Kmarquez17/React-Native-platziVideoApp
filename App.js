/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native'

import Home from './src/screens/containers/home'

class App extends Component {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}

export default App