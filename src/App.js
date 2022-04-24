import "./App.css";
import PostList, {getPostItems} from "./Posts/PostList";
import Modal from "./Modal/Modal";
import ModalCreateWindows from "./Modal/ModalCreateWindows";
import React from "react";
import Context from "./context";

function App() {
    const [Items, setItems] = React.useState([
        {
            idItem: 0,
            Title: "Что такое Lorem Ipsum?",
            PostText:
                'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является ' +
                'стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник ' +
                "создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
            Datatime: new Date(2014, 0, 1, 18, 12, 0, 0),
        },
        {
            idItem: 1,
            Title: "Почему он используется?",
            PostText:
                "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. " +
                "Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, " +
                "а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации " +
                '"Здесь ваш текст.',
            Datatime: new Date(2018, 0, 1, 18, 13, 0, 0),
        },
        {
            idItem: 2,
            Title: "Откуда он появился?",
            PostText:
                "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. " +
                "Его корни уходят в один фрагмент классической латыни 45 года н.э., " +
                "то есть более двух тысячелетий назад. ",
            Datatime: new Date(2011, 0, 1, 18, 14, 0, 0),
        },
        {
            idItem: 3,
            Title: "Откуда ?",
            PostText: "Многие думают. ",
            Datatime: new Date(2010, 0, 1, 18, 15, 0, 0),
        },
    ]);

    const [modalActiveEditor, setModalActiveEditor] = React.useState(false);
    const [modalActiveCreator, setModalActiveCreator] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(null);
    const [stateSort, setStateSort] = React.useState(false);

    function clickOnPost(item) {
        setModalActiveEditor(true);
        setCurrentItem(item);
    }

    function removePost(id) {
        setItems(Items.filter((item) => item.idItem !== id));
        setModalActiveEditor();
        setCurrentItem(null);
    }

    function editPost(title, text, id) {
        const search = obj => obj.idItem === id;
        let index = Items.findIndex(search)
        console.log(index)
        console.log(Items.at(index))
        console.log("Items Before  ", Items)
        console.log(text, " ", title)
        setItems(
            Items.map((Item) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                Item.idItem === id
                    ? {...Item, Title: title, PostText: text}
                    : {...Item}
            )
        );
        console.log("Items After  ", Items)

    }

    function addPost(title, text) {
        let Item = {
            idItem: Items.length,
            Title: title,
            PostText: text,
            Datatime: new Date()
        }
        console.log(Item)
        setItems(Items => [...Items, Item]);
        console.log("Items After  ", Items)

    }

    function filterItem(title) {
        setItems(Items.filter((item) => item.Title.toLowerCase().includes(title.toLowerCase())));
        console.log("filterTitle", title);
        console.log("filterItem", Items);
    }


    function sortItem(directionByData) {
        if (!directionByData){
            setItems(Items.sort(function (a, b) {
                return new Date(b.Datatime) - new Date(a.Datatime);
            }))
            setStateSort(true);
        }
        console.log("filterItem", Items);

    }

    console.log("items", Items);
    console.log("currentItem", currentItem);

    const postsElementRef = React.useRef(null);

    const refFilter = React.createRef();


    return (
        <Context.Provider value={{removePost, clickOnPost, currentItem}}>
            <div className="App">
                <div className="App-header">
                    <button
                        className="CreatePostButton"
                        onClick={() => setModalActiveCreator(true)}
                    >
                        Добавление нового поста
                    </button>
                    <h1>Одностраничное приложение React + Redux</h1>
                    <div className="FilterArea">
                        <input ref={refFilter} type="text"/>
                        <button className="FilterPostButton" onClick={() => filterItem(refFilter.current.value)}>
                            Фильтрация по заголовкам
                        </button>
                        <br/>
                        <button className="SortPostButton" onClick={() => sortItem(stateSort)}>
                            Сортировка по датам
                        </button>
                    </div>
                </div>
                <PostList Items={Items} ref={postsElementRef}/>

                <Modal
                    active={modalActiveEditor}
                    setActive={setModalActiveEditor}
                    item={currentItem}
                    editPost={editPost}
                    removePost={removePost}
                    clickOnPost={clickOnPost}
                />
                <ModalCreateWindows
                    active={modalActiveCreator}
                    setActive={setModalActiveCreator}
                    item={currentItem}
                    addPost={addPost}
                />
            </div>
        </Context.Provider>
    );
}

export default App;
