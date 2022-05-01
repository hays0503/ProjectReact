/*/ Функция измение(создание нового) состояние /*/
import { uid } from 'uid';

import {
    ACTION_CHANGE_ID_INPUT,
    ACTION_REMOVE_POST,
    ACTION_CHANGE_TITLE_POST,
    ACTION_ADD_POST,
    ACTION_CHANGE_TEXT_POST,
    ACTION_INIT_POST,
    ACTION_CLICK_ON_POST,
    ACTION_EDIT_POST,
    ACTION_SORT_POST,
    ACTION_FILTER_POST
} from './types'

export const initialState = {
    textPost: "Заглушка для поста",
    titleText: "Заглушка для поста",
    idInput: uid(),
    idClickPost: 0,
    sortOrder:false,
     postItem:[
//     {
//     id: uid(),
//     idItem: uid(),
//     titlePost: "Заглушка для первого поста"
//     contentPost: "Заглушка для первого поста",
//     data: Date(),
//     }
    ]
};

function editOnPost(arr,index,item) {
    let arrNew = arr
    arrNew[index]=item
    return arrNew
}


// Pure Functions
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_TEXT_POST:
            return {...state, textPost: action.payload}
        case ACTION_CHANGE_TITLE_POST:
            return {...state, titleText: action.payload}
        case ACTION_ADD_POST:
            fetch('  http://localhost:3004/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(action.payload)
            });
            return {...state, postItem: [...state.postItem,...[action.payload]]}
        case ACTION_REMOVE_POST:
            fetch('  http://localhost:3004/posts/'+state.postItem.at(state.idClickPost).id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },

            });
            return {...state, postItem: state.postItem.filter((item) => item.idItem !== action.payload)}
        case ACTION_CHANGE_ID_INPUT:
            return {...state, idInput: action.payload}
        case ACTION_INIT_POST:
            return {...state, postItem: [...state.postItem,...action.payload]}
        case ACTION_CLICK_ON_POST:

            return {...state, idClickPost: action.payload}
        case ACTION_EDIT_POST:
            fetch('  http://localhost:3004/posts/'+state.postItem.at(state.idClickPost).id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(action.payload)
            });
            return {...state, postItem: editOnPost(state.postItem,state.idClickPost,action.payload)}
        case ACTION_SORT_POST:
            return {...state,
                postItem: [...state.postItem.sort(function (a, b) {
                                                                if(state.sortOrder)
                                                                    return new Date(b.data) - new Date(a.data);
                                                                else
                                                                    return new Date(a.data) - new Date(b.data)})],
                sortOrder: !state.sortOrder
            }
        case ACTION_FILTER_POST:

            return {...state, postItem: state.postItem.filter((item) =>
                    item.titlePost.toLowerCase().includes(action.payload.toLowerCase()))}
        default:
    }
    return state;
}

