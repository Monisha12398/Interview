import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { connect } from "react-redux";
import Astroidcard from "../components/Astroidcard";
import { Astroid } from "../types/types";

type Props={
    astroid:Astroid
}

const AstroidView = ({astroid}:Props)=>{
    return(
        <View>
            <Astroidcard>
                <Text style={styles.text}>
                    <Text>Name: {astroid.astroid.name}</Text>
                </Text>
                <Text style={styles.text}>
                    <Text>Url: {astroid.astroid.nasa_jpl_url}</Text>
                </Text>
                <Text style={styles.text}>
                    <Text>Hazardous: {astroid.astroid.is_potentially_hazardous_asteroid? 'Yes' : 'No'}</Text>
                </Text>
            </Astroidcard>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:16,
        padding:20,
    }
})
const mapStateToProps = (state:{astroidState:Astroid})=>({
    astroid: state.astroidState
})
export default connect(mapStateToProps)(AstroidView)