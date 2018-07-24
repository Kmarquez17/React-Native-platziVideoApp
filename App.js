/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import CategoryList from './src/video/containers/category-list'
import SuggestionList from './src/video/containers/suggestion-list'
import API from './src/utils/api'
import { Text } from 'react-native'
import Player from './src/player/containers/player'

// console.disableYellowBox = true


class App extends Component {
  state = {
    suggestionList: [],
    CategoryList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(5);
    const categories = await API.getMovies();
    // console.log(movies);
    // console.log(categories);

    this.setState({
      suggestionList: movies,
      CategoryList: categories,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Player/>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList list={this.state.CategoryList} />
        <Text>Movies</Text>
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}

export default App