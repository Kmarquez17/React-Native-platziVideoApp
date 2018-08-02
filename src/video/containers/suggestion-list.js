import React, { Component } from 'react'
import {
    FlatList,
    Text
} from 'react-native'

//Componentes Tontos es decir componentes solo de diseño
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

function mapStateTopProps(state){
    return{
        list: state.suggestionList
    }
}
class SuggestionList extends Component{
    renderEmpty = () => <Empty/>
    itemseparator = () => <Separator />
    
    viewMovie = (item) =>{
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload:{
                movie: item
            }
        })
    }
    renderItem = ({item}) => {
        return(
            <Suggestion 
                {...item}
                onPress = {() => {this.viewMovie(item)}}
            />
        )
    }

    keyExtractor = item => item.id.toString()

    render(){        
        return(
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemseparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}


export default connect(mapStateTopProps)(SuggestionList)
