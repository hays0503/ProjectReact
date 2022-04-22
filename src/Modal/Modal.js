import React, {useContext} from 'react';
import "./Modal.css";
import imgDeleteStatic from './del.png'
import Context from "../context";


const style ={
    button: {
        marginBlockEnd: '330px',
        marginInlineStart: '-110px',
        marginInlineEnd: '40px'
    }
}

const Modal = (active, setActive, Item) => {
    const {removePost,clickOnPost,indexItemClick} = useContext(Context)
    return (
        <div className={active.active ? "Modal active": "Modal"} onClick={() => active.setActive(false)}>
            <h1>{indexItemClick}</h1>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>
                 <div className="Post">
                     <div className="PostBody">
                         <h3>{active.Item.Title}</h3>
                         <p>{active.Item.PostText}</p>
                     </div>
                 </div>

             </div>
            <button style={style.button} onClick={()=>removePost(indexItemClick)}>
                <img src={imgDeleteStatic}/>
            </button>
        </div>
    )
}

export default Modal;
