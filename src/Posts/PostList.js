import React from "react";
import PostsItems from "./PostsItems";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {initPost} from "../redux/actions";

let init = false

function PostList(props) {

    if(!init){
        fetch('http://localhost:3004/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    props.initPost(data);
            });
        init = true
    }


  return (

    <div className="Posts">
      {props.postItem.length>0?
          props.postItem.map((todo) => {return <PostsItems todo={todo} key={todo.idItem} />;})
          :<p>Похоже мы всё удалили...</p>
      }
    </div>

  );
}

const putStateToProps = (state) => {
  return {
    postItem:  state.posts.postItem
  }
};

const putActionsToProps = (dispatch) => {
    return {
        initPost:   bindActionCreators(initPost, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(PostList)