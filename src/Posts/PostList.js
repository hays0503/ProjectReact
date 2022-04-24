import React from "react";
import PostsItems from "./PostsItems";

export function getPostItems(props, id) {
  props.Item((id) => {
    return <PostsItems id={id} key={id.id} />;
  });
}

export default function PostList(props) {
  const postsElementRef = React.useRef(null);

  return (
    <div className="Posts" ref={postsElementRef}>
      {props.Items.map((todo) => {
        return <PostsItems todo={todo} key={todo.idItem} />;
      })}
    </div>
  );
}
