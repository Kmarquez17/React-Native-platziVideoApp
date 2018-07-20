import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
function HorizontalSeperator(props){
    return(
        <View
            style={styles.separator}
        />
    )
}

const styles = StyleSheet.create({
    separator:{
        flex: 1,
        marginHorizontal: 5,
        borderLeftWidth:1,
        borderLeftColor: 'rgba(0,0,0,0.6)'
    }
})

export default HorizontalSeperator