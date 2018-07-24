import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import Video from 'react-native-video'
import Layout from '../components/player-layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/playpause'

class Player extends Component {
    state={
        loading: true,
    }
    onBuffer = ({IsBuffering}) =>{
        this.setState({
            loading:IsBuffering
        })
    }
    onLoad = ({}) =>{
        this.setState({
            loading:false,
            paused:false,
        })
    }
    playpause = () =>{
        this.setState({
            paused: !this.state.paused
        })
    }
    render() {
        return (
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
                        resizeMode="contain"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        style={styles.video}
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color="red"/>
                }
                controls={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playpause}
                            paused={this.state.paused}
                        />
                        <Text>Progrees bar | </Text>
                        <Text>Time left | </Text>
                        <Text>Full screen | </Text>
                    </ControlLayout>
                }
            />

        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})

export default Player