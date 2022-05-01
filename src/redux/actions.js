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



export const changeTitlePost = (newTitlePost) => {

  return {
    type: ACTION_CHANGE_TITLE_POST,
    payload: newTitlePost
  };
};

export const changeTextPost = (newTextPost) => {
  return {
    type: ACTION_CHANGE_TEXT_POST,
    payload: newTextPost
  };
};

export const addNewPost = (post) => {
  return {
    type: ACTION_ADD_POST,
    payload: post
  };
};

export const editPost = (post) => {
  return {
    type: ACTION_EDIT_POST,
    payload: post
  };
};

export const initPost = (postArr) => {
  return {
    type: ACTION_INIT_POST,
    payload: postArr
  };
};

export const clickOnThePost = (id) => {
  return {
    type: ACTION_CLICK_ON_POST,
    payload: id
  };
};
export const removePost = (idPost) => {
  return {
    type: ACTION_REMOVE_POST,
    payload: idPost
  };
};
export const filterPost = (filterMode) => {
  return {
    type: ACTION_FILTER_POST,
    payload: filterMode
  };
};
export const sortPost = (sortMode) => {
  return {
    type: ACTION_SORT_POST,
    payload: sortMode
  };
};

export const changeIdPost = (idPost) => {
  return {
    type: ACTION_CHANGE_ID_INPUT,
    payload: idPost
  };
};
