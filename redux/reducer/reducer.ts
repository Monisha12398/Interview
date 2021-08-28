import React from "react";
import { Astroid } from "../../types/types";
import { AstroidAction } from "../../types/types";

const initialState : Astroid={
    astroid:{
        name:'',
        nasa_jpl_url:'',
        is_potentially_hazardous_asteroid:''
    }
}
export default (state=initialState,action:AstroidAction)=>{
    switch(action.type){
        case 'GET_ASTROID':
            return{
                ...state,
                astroid:action.payload
            }
        default:
            return state    
    }
}