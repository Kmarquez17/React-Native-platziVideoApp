import React, { Component } from 'react';
import Header from '../../sections/components/header'
import MovieLayout from '../components/movies-layout'
import Player from '../../player/containers/player'
import Close from '../../sections/components/close'
import { connect } from 'react-redux'
import Details  from '../../video/components/details'
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
                <Details {...this.props.movie}/>
            </MovieLayout>
        )
    }

    
}

function mapStateToProps(state){
    return{
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie)