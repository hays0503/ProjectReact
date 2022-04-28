import React, {useContext} from "react";
import Context from "../context";
import {Link} from "react-router-dom";

var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

export default function PostsItems({todo}) {
    const {clickOnPost} = useContext(Context);

    function click(todo) {
        clickOnPost(todo);
    }

    return (
        <div className="Post" onClick={() => click(todo)}>
            <Link to="/post">
                <div className="PostBody">
                    <h3>{todo.Title}</h3>
                    <p>{todo.PostText}</p>
                    <p>Дата создание {todo.Datatime.toLocaleString("ru", options)}</p>
                </div>
            </Link>
        </div>
    );
}
