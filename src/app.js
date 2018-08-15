import React, { Component } from 'react'
import { Text } from 'react-native'

import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Header from './sections/components/header'
import CategoryList from './video/containers/category-list'
import SuggestionList from './video/containers/suggestion-list'

import API from './utils/api'
import { connect } from 'react-redux'

class AppLayout extends Component {
    async componentDidMount() {
        const categoryList = await API.getMovies();
        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList,
            }
        })
        const suggestionList = await API.getSuggestion(10);
        this.props.dispatch({
            type: 'SET_SUGGESTION_LIST',
            payload: {
                suggestionList,
            }
        })
    }
    render() {
        if (this.props.selectedMovie){
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <Text>Buscador</Text>
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }

}

function mapstateToProps (state){
    return{
        selectedMovie: state.selectedMovie,
    }
}

export default connect(mapstateToProps)(AppLayout)