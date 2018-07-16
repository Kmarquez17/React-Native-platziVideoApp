/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Header from './src/sections/components/header'
import SuggestionList from './src/video/containers/suggestion-list'

import {
  Text,
} from 'react-native'

import Home from './src/screens/containers/home'

class App extends Component {
  render() {
    return (
      <Home>
        <Header/>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList/>
      </Home>
    );
  }
}

export default App