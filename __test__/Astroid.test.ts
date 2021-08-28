import { mount } from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import * as dependencies from '../redux/action/action'
import { Provider } from "react-redux";
import Astroid from "../screens/Astroid";

const mockStore = configureMockStore()
const store = mockStore({
    userState:{
        astroid:{
            astroid:{
                name:'',
                nasa_jpl_url:'',
                is_potentially_hazardous_asteroid:''
            }
        },
    },
})

const createTestProps = (props:Object)=>({
    navigation:{
        navigate: jest.fn()
    },
    ...props
})

describe('Astroid Search',()=>{
    describe('rendering',()=>{
        let props = createTestProps({})
        beforeEach(()=>{
            props= {
                navigation:{
                    navigate:jest.fn(()=>console.log('called'))
                }
            };

            Object.defineProperty(dependencies,'SearchAstroid',{
                value:jest.fn(()=>{
                    return ()=>{
                        console.log('mock fn');
                        return new Promise((res,rej)=>{
                            res('done');
                        })
                    }
                })
            });

            Object.defineProperty(dependencies,'RandomAstroid',{
                value:jest.fn(()=>{
                    return ()=>{
                        console.log('mock fn');
                        return new Promise((res,rej)=>{
                            res('done');
                        })
                    }
                })
            });

        })
    })
})