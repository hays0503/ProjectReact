import React, { useContext } from "react";
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



const Modal = (props) => {
  const { active, setActive, item,editPost } = props;

  const { removePost, currentItem } = useContext(Context);
  
  let [stateContentEditable, setStateContentEditable] = React.useState(false)
  
  function toggleEditable(props) {
    props.stopPropagation()
    setStateContentEditable(true)
    const postTitle = document.getElementById("Title")
    const postText = document.getElementById("PostText")
    console.log(postTitle)
    console.log(postText)
    editPost(postTitle.innerText,postText.innerText,currentItem?.idItem)
  }

  return (
    <div
      className={active ? "Modal active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <h1>{item?.idItem}</h1>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="EditableContent" contentEditable={stateContentEditable}>
          <div className="Post" >
            <div className="PostBody">
              <h3 id="Title">{item?.Title}</h3>
              <p id="PostText">{item?.PostText}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        style={style.buttonDelete}
        onClick={() => removePost(currentItem?.idItem)}
      >
        <img src={imgDeleteStatic} />
      </button>
      <button
          style={style.buttonEdit}
          onClick={(e) => toggleEditable(e)}
      >
        <img src={imgEditStatic} />
      </button>
    </div>
  );
};

export default Modal;
