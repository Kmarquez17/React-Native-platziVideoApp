import React, { Component } from 'react'
import {
    FlatList,
    Text
} from 'react-native'

class SuggestionList extends Component{
    render(){
        const list = [
            {
                title:'Kevin',
                key: '1'
            },{
                title:'Alberto',
                key: '2'
            },{
                title:'Marquez',
                key: '3'
            },{
                title:'Rodriguez',
                key: '4'
            }
        ]
        return(
            <FlatList
                data={list}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        )
    }
}


export default SuggestionList
