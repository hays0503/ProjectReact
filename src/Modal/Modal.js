import React, {useContext} from "react";
import "./Modal.css";
import imgDeleteStatic from "./del.png";
import imgEditStatic from "./edit.png"
import imgBackStatic from "./back.png"
import Context from "../context";
import {bindActionCreators} from "redux";
import {editPost, removePost} from "../redux/actions";
import {connect} from "react-redux";


const style = {
    buttonDelete: {
        marginBlockEnd: "330px",
        marginInlineStart: "-110px",
        marginInlineEnd: "40px",
    },
    buttonEdit: {
        marginBlockEnd: "330px",
        marginInlineStart: "-190px",
        marginInlineEnd: "130px",
    },
    buttonQuit: {
        marginBlockEnd: "330px",
        marginInlineStart: "-270px",
        marginInlineEnd: "200px",
    }
};


const Modal = (props) => {
    const {active,idClickPost,postItem,removePost,editPost} = props;
    const {quitPost} = useContext(Context);

    let [stateContentEditable, setStateContentEditable] = React.useState(false)

    function toggleEditable(props) {
        if(stateContentEditable){
            const postTitle = document.getElementById("Title").innerText
            const postText = document.getElementById("PostText").innerText
            editPost(
                {
                    id: postItem.at(idClickPost).idItem,
                    idItem: postItem.at(idClickPost).idItem,
                    titlePost: postTitle,
                    contentPost: postText,
                    data: new Date()
                })
            setStateContentEditable(false)
        }else {
            props.stopPropagation()
            setStateContentEditable(true)
        }

    }

    function deletePost() {
        if(props.postItem.length>0){
            removePost(postItem.at(idClickPost).idItem)
            quitPost()
        }
    }

    return (

            <div
                className={active ? "Modal active" : "Modal"}
                onClick={(e) => e.stopPropagation()}
            >
                <h1>{postItem?.at(idClickPost)?.idItem}</h1>
                <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                    <div className="EditableContent" contentEditable={stateContentEditable}>
                        <div className="Post">
                            <div className="PostBody">
                                <h3 id="Title">{postItem?.at(idClickPost)?.titlePost}</h3>
                                <p id="PostText">{postItem?.at(idClickPost)?.contentPost}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    style={style.buttonDelete}
                    onClick={() => deletePost()}
                >
                    <img src={imgDeleteStatic} alt={"Удаление поста"}/>
                </button>
                <button
                    style={style.buttonEdit}
                    onClick={(e) => toggleEditable(e)}
                >
                    <img src={imgEditStatic} alt={"Редактирование поста"}/>
                </button>
                <button
                    style={style.buttonQuit}
                    onClick={()=>quitPost()}
                >
                    <img src={imgBackStatic} alt={"Выход"}/>
                </button>
            </div>

    );
};

const putStateToProps = (state) => {
    return {
        idClickPost: state.posts.idClickPost,
        postItem:  state.posts.postItem
    }
};


const putActionsToProps = (dispatch) => {
    return {
        editPost:   bindActionCreators(editPost, dispatch),
        removePost: bindActionCreators(removePost, dispatch),
    }
};

export  default connect(putStateToProps, putActionsToProps)(Modal)

