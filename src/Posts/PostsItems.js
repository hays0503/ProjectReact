import React, {useContext} from 'react';
import Context from "../context";

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

export default function PostsItems({todo}) {
    const {removePost,clickOnPost,indexItemClick} = useContext(Context)

    function click(id) {
        console.log('onClickPost data in func: ',id)
        clickOnPost(id)
    }

 return  (
     <div className="Post" onClick={() => click(todo.idItem)}>
         <div className="PostBody">
             <h3>{todo.Title}</h3>
             <p>{todo.PostText}</p>
             <p>Дата создание {todo.Datatime.toLocaleString("ru", options)}</p>
         </div>
     </div>

     );

}