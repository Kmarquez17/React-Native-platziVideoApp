import React, { Component } from 'react';
import Header from '../../sections/components/header'
import MovieLayout from '../components/movies-layout'
import Player from '../../player/containers/player'

class Movie extends Component {
    render() {
        return (
            <MovieLayout>
                <Header />
                <Player />
            </MovieLayout>
        )
    }
}

export default Movie