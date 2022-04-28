import {CREATE_POST,FETCH_POSTS,DELETE_POSTS,EDIT_POSTS} from './types'

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POSTS,
    payload:id
  }
}

export function getPostsDB() {
  return {
    type: FETCH_POSTS
  }
}

export function editPosts(editableText) {
  return {
    type: EDIT_POSTS,
    payload: editableText
  }
}
