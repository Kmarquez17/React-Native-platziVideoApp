import React, { Component } from 'react';
import Header from '../../sections/components/header'
import MovieLayout from '../components/movies-layout'
import Player from '../../player/containers/player'
import Close from '../../sections/components/close'
import { connect } from 'react-redux'
class Movie extends Component {
    closeVideo = () =>{
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload:{
                movie: null
            }
        })
    }
    render() {
        return (
            <MovieLayout>
                <Header> 
                    <Close
                        Onpress={this.closeVideo}
                    />
                </Header>
                <Player />
            </MovieLayout>
        )
    }
}

export default connect(null)(Movie)