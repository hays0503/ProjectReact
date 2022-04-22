import './App.css';
import PostList, {getPostItems} from "./Posts/PostList";
import Modal from "./Modal/Modal";
import React from "react";
import Context from "./context";

function App() {
    let [Items, setItems] = React.useState([
        {
            idItem:0,
            Title: "Что такое Lorem Ipsum?",
            PostText: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является " +
                "стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник " +
                "создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
            Datatime: new Date(2011, 0, 1, 18, 0, 0, 0)
        },
        {
            idItem:1,
            Title: "Почему он используется?",
            PostText: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. " +
                "Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, " +
                "а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации " +
                "\"Здесь ваш текст.",
            Datatime: new Date(2011, 0, 1, 18, 0, 0, 0)
        },
        {
            idItem:2,
            Title: "Откуда он появился?",
            PostText: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. " +
                "Его корни уходят в один фрагмент классической латыни 45 года н.э., " +
                "то есть более двух тысячелетий назад. ",
            Datatime: new Date(2011, 0, 1, 18, 0, 0, 0)
        },
        {
            idItem:3,
            Title: "Откуда ?",
            PostText: "Многие думают. ",
            Datatime: new Date(2011, 0, 1, 18, 0, 0, 0)
        }
    ])

    const [modalActiveEditor, setModalActiveEditor] = React.useState(false)
    const [modalActiveCreator, setModalActiveCreator] = React.useState(false)

    let [indexItemClick, setIndexItemClick] = React.useState(0);

    function clickOnPost(id) {
        setModalActiveEditor(true);
        setIndexItemClick(id)
    }
    
    function removePost(id) {
        setItems(
            Items.filter( item => item.idItem !== id)
        )
    }

    console.log("AfterRemove",Items)
    return (
    <Context.Provider value={{removePost,clickOnPost,indexItemClick}}>
    <div className="App">
        <div className="App-header">
            <button className="CreatePostButton" onClick={() => setModalActiveCreator(true)}>
                Добавление нового поста
            </button>
            <h1>Одностраничное приложение React + Redux</h1>
            <button className="FilterPostButton">Фильтрация постов</button>
        </div>
        <PostList Items={Items}/>
        <Modal active={modalActiveEditor} setActive={setModalActiveEditor} Item=
            {Items[Items.length>=indexItemClick ? indexItemClick:0]} />
    </div>
    </Context.Provider>
  );
}

export default App;
