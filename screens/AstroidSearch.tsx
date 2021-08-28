import React from "react";
import { useState } from "react";
import { TextInput, View,StyleSheet } from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";
import {SearchAstroid,RandomAstroid} from '../redux/action/action'

type Props={
    SearchAstroid:Function,
    RandomAstroid:Function,
    navigation:{
        navigate:Function
    }
}
const AstroidSearch = ({RandomAstroid,SearchAstroid,navigation}:Props)=>{
    const [id,setid] = useState('')

    const clickhandle=(value:string)=>{
        setid(value)
    }
    const clicksubmit = ()=>{
        SearchAstroid(id)
        navigation.navigate('Astroid')
    }
    const clickrandom=()=>{
        RandomAstroid()
        navigation.navigate('Astroid')
    }
    return(
        <View>
            <TextInput style={styles.text} onChangeText={value=>clickhandle(value)} value={id} />
            <Button title='Submit' onPress={()=>clicksubmit()} disabled={id.length==0} />
            <Button title='Random Astroid' onPress={()=>clickrandom()} disabled={false} />
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        paddingBottom:30
    }
})

export default connect(null,{SearchAstroid,RandomAstroid})(AstroidSearch)