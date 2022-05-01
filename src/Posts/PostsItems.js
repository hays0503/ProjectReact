import React from "react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {clickOnThePost} from "../redux/actions";
import {connect} from "react-redux";


const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

const PostsItems = (props) => {

    const {clickOnThePost,postItem,todo} = props

    const search = obj => obj.idItem === todo.idItem;

    return (
        <div className="Post" onClick={() => clickOnThePost(postItem.findIndex(search))}>
            <Link to="/post">
                <div className="PostBody">
                    <h3>{todo?.titlePost}</h3>
                    <p>{todo?.contentPost}</p>
                    <p>Дата создание {todo?.data.toLocaleString("ru", options)}</p>
                    <p>{todo?.idItem}</p>
                </div>
            </Link>
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
        clickOnThePost:   bindActionCreators(clickOnThePost, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(PostsItems)