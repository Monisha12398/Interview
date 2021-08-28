import { Dispatch } from "redux";
import http from "../../http/http";

const key='fri0UsJNXAeorm9yqkC7vXNVJbFMMMmhb4khOx2a'

export const SearchAstroid = (id:string)=>(dispatch:Dispatch)=>{
    http.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`)
    .then(res=>{
        dispatch({type: 'GET_ASTROID',payload:res.data})
    })
    .catch(err=>{
        console.log('err')
    })
}
export const RandomAstroid = ()=>(dispatch:Dispatch)=>{
    http.get(`browse?api_key=${key}`)
    .then(res=>{
        const randomid = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
        http.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomid}?api_key=${key}`)
        .then(res=>{
            dispatch({type: 'GET_ASTROID',payload:res.data})
        })
    })
    .catch(err=>{
        console.log('err')
    })
}