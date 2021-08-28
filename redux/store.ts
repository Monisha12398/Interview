import React from "react";
import { applyMiddleware, createStore, Middleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from 'redux-thunk'

const middlewares: Middleware[] = [thunk]

const store = createStore(rootReducer,applyMiddleware(...middlewares))
export default store