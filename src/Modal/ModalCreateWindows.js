import React, {useContext} from "react";
import "./Modal.css";
import Context from "../context";
import imgBackStatic from "./back.png";

const style = {
    buttonQuit: {
        marginBlockEnd: "290px",
        marginInlineStart: "-90px",
        marginInlineEnd: "40px",
    }
};


const ModalCreateWindows = (props) => {
    const {active, addPost} = props;
    const {quitPost} = useContext(Context);

    let refTitle = React.createRef();
    let refText = React.createRef();


    function addPostItem(props) {
        props.stopPropagation()
        addPost(refTitle.current.value, refText.current.value)
    }

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
                            <input ref={refTitle} type="text"/>
                            <br/>
                            PostText: <br/>
                            <textarea ref={refText} type="text" cols="40" rows="3"/>
                        </label>
                        <button
                                onClick={(e) => addPostItem(e)}
                            >
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

export default ModalCreateWindows;
