import React from 'react'
import{
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Close (props){
    return(
        <TouchableOpacity
            onPress={props.Onpress}
            style={styles.container}
        >
            <Text style={styles.button}>X</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        fontWeight: 'bold',
        color:'white',
    },
    container:{
        backgroundColor:'#14b739',
        borderRadius: 12,
        width:25,
        height:25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Close