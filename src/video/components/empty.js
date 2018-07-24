import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
function Empty (props){
    return(
        <View style={styles.container}>
             <ActivityIndicator size="large" color="#4c4c4c" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    }
})

export default Empty