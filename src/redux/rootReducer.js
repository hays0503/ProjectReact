import {combineReducers} from 'redux'
import {postsReducer} from "./postReductor"

export const rootReducer = combineReducers({
    posts: postsReducer
})
