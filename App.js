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
import { Provider } from 'react-redux'
import store from './src/store'

// console.disableYellowBox = true


class App extends Component {
  // state = {
  //   suggestionList: [],
  //   CategoryList: [],
  // }
  async componentDidMount() {
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      }
    })
    const suggestionList = await API.getSuggestion(5);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      }
    })

  }

  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
        <Text>Buscador</Text>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>

    );
  }
}

export default App