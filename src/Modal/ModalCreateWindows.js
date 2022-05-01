import React, {useContext} from "react";
import "./Modal.css";
import Context from "../context";
import imgBackStatic from "./back.png";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNewPost, changeIdPost, changeTextPost, changeTitlePost} from "../redux/actions";
import {uid} from "uid";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const style = {
    buttonQuit: {
        marginBlockEnd: "290px",
        marginInlineStart: "-90px",
        marginInlineEnd: "40px",
    }
};

const ModalCreateWindows = (props) => {
    let {textPost,titleText,
        changeTitlePost, changeTextPost, addNewPost } = props

    const {active} = props;
    const {quitPost} = useContext(Context);

    return (
        <div
            className={active ? "Modal active" : "Modal"}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                <div className="Post">
                    <div className="PostBody">
                        <label>
                            Title: <br/>
                            <input
                                type="text"
                                value={titleText}
                                onChange={(event) => {
                                    changeTitlePost(event.target.value)
                                }}/>
                            <br/>
                            PostText: <br/>
                            <textarea value={textPost} type="text" cols="40" rows="3"
                                      onChange={(event) => {
                                          changeTextPost(event.target.value)
                                      }}/>
                        </label>
                        <button onClick={()=> {addNewPost(
                            {
                                id: uid(),
                                idItem: uid(),
                                titlePost: titleText,
                                contentPost: textPost,
                                data: new Date()
                            })}}>
                            Добавить пост
                        </button>



                    </div>
                </div>
            </div>
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
        textPost: state.posts.textPost,
        titleText: state.posts.titleText,
        postItem:  state.posts.postItem
    }
};


const putActionsToProps = (dispatch) => {
    return {
        changeTextPost: bindActionCreators(changeTextPost, dispatch),
        changeTitlePost: bindActionCreators(changeTitlePost, dispatch),
        changeIdPost: bindActionCreators(changeIdPost, dispatch),
        addNewPost:   bindActionCreators(addNewPost, dispatch),
    }
};

export  default connect(putStateToProps, putActionsToProps)(ModalCreateWindows)

