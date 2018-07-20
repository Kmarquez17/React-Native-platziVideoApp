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
import { View,Text } from 'react-native'
import Video from 'react-native-video'

// console.disableYellowBox = true


class App extends Component {
  state = {
    suggestionList: [],
    CategoryList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(5);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);

    this.setState({
      suggestionList: movies,
      CategoryList: categories,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <View
          style={{
            flex: 1,
            height: 100,
          }}
        >
          <Video
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="contain"
          />
        </View>

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