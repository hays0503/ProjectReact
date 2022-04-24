import React, { useContext } from "react";
import Context from "../context";

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export default function PostsItems({ todo }) {
  const {clickOnPost } = useContext(Context);

  function click(todo) {
    clickOnPost(todo);
  }

  return (
    <div className="Post" onClick={() => click(todo)}>
      <div className="PostBody">
        <h3>{todo.Title}</h3>
        <p>{todo.PostText}</p>
        <p>Дата создание {todo.Datatime.toLocaleString("ru", options)}</p>
      </div>
    </div>
  );
}
