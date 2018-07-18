/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Header from './src/sections/components/header'
import SuggestionList from './src/video/containers/suggestion-list'
import API from './src/utils/api'
import {Text} from 'react-native'

// console.disableYellowBox = true

import Home from './src/screens/containers/home'

class App extends Component {
  state = {
    suggestionList : []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(5);
    //console.log(movies);

    this.setState({
      suggestionList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header/>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList list = {this.state.suggestionList}/>
      </Home>
    );
  }
}

export default App