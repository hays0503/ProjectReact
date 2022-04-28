/*/ Функция измение(создание нового) состояние /*/

import {CREATE_POST,FETCH_POSTS,DELETE_POSTS,EDIT_POSTS} from './types'


const initialState = {
    posts: [],
    fetchedPosts: []
}

// Pure Functions
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                // Создание нового поста
            }
        case FETCH_POSTS:
            return {
                // Получение из БД списка постов
            }
        case EDIT_POSTS:
            return {
                // Редактирование поста по выбору
            }
        case DELETE_POSTS:
            return {
                // Удаление поста по выбору
            }
        default: return state
    }
}

