import React from "react";
import { Text, TouchableOpacity,StyleSheet } from "react-native";

type Props={
    title:string,
    onPress:Function,
    disabled:boolean
}

const Button = ({title,onPress,disabled}:Props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={()=>onPress()} disabled={disabled}>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        backgroundColor:'tomato',
        padding:20
    }
})
export default Button