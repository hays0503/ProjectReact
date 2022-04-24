import React, {createRef, useContext, useState} from "react";
import "./Modal.css";
import imgDeleteStatic from "./del.png";
import imgEditStatic from "./edit.png"
import Context from "../context";

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
};



const ModalCreateWindows = (props) => {
  const { active, setActive,addPost } = props;

  let refTitle = React.createRef();
  let refText = React.createRef();


  function addPostItem(props) {
    props.stopPropagation()
    addPost(refTitle.current.value,refText.current.value)
  }

  return (
    <div
      className={active ? "Modal active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="Post" >
            <div className="PostBody">
                <label>
                  Title: <br/>
                    <input  ref={refTitle} type="text" />
                  <br/>
                  PostText: <br/>
                    <textarea ref={refText} type="text"  cols="40" rows="3" />
                </label>
                <input type="submit" value="Добавить пост" onClick={(e) => addPostItem(e)}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateWindows;
