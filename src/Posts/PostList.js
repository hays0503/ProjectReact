import React from "react";
import PostsItems from "./PostsItems";

export default function PostList(props) {

  return (

    <div className="Posts">
      {props.Items.map((todo) => {
        return <PostsItems todo={todo} key={todo.idItem} />;
      })}
    </div>

  );
}
