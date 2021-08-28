import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Astroid from "../screens/Astroid";
import AstroidSearch from "../screens/AstroidSearch";

const Stack = createStackNavigator()
const Navigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                 name='AstroidSearch'
                 component={AstroidSearch}
                 options={{
                     title:'Astroid Search',
                     headerStyle:{
                         backgroundColor:'purple'
                     },
                     headerTintColor:'grey',
                     headerTitleStyle:{
                         fontWeight:'bold'
                     }
                 }} 
                />
                <Stack.Screen 
                 name='Astroid'
                 component={Astroid}
                 options={{
                     title:'Astroid',
                     headerStyle:{
                         backgroundColor:'purple'
                     },
                     headerTintColor:'grey',
                     headerTitleStyle:{
                         fontWeight:'bold'
                     }
                 }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation