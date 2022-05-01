import "./App.css";
import PostList from "./Posts/PostList";
import Modal from "./Modal/Modal";
import ModalCreateWindows from "./Modal/ModalCreateWindows";
import Context from "./context";
import React from "react";
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {filterPost, sortPost} from "./redux/actions";
import {connect} from "react-redux";


function App(props) {

    const [modalActiveEditor, setModalActiveEditor] = React.useState(true);
    const [modalActiveCreator, setModalActiveCreator] = React.useState(false);
    const refFilter = React.createRef();
    const navigate = useNavigate();

    function quitPost() {
        navigate(-1)
    }

    function filterItem(title) {
        props.filterPost(title)
    }

    function Layout() {
        return (
            <div className="App">
                <div className="App-header">
                    <Link to="/newpost">
                        <br/>
                        <button
                            className="CreatePostButton"
                            onClick={() => setModalActiveCreator(true)}
                        >
                            Добавление нового поста
                        </button>
                    </Link>
                    <h1>Одностраничное приложение React + Redux</h1>
                    <div className="FilterArea">
                        <input ref={refFilter} type="text"/>
                        <button className="FilterPostButton"
                                onClick={() => filterItem(refFilter.current.value)}>
                            Фильтрация по заголовкам
                        </button>
                        <br/>
                        <button className="SortPostButton" onClick={() => props.sortPost()}>
                            Сортировка по датам
                        </button>
                    </div>
                </div>

                <PostList/>


            </div>
        );
    }

    function NewPost() {
        return (<ModalCreateWindows
            active={modalActiveCreator}
            setActive={setModalActiveCreator}
        />)
    }

    function Post() {
        return <Modal
                active={modalActiveEditor}
                setActive={setModalActiveEditor}
        />
    }

    return (
        <Context.Provider value={{quitPost}}>
            <Routes>
                <Route path='/' element={Layout()}/>
                <Route path='/newpost' element={NewPost()}/>
                <Route path='/post' element={Post()}/>
            </Routes>
        </Context.Provider>
    )
        ;
}

const putActionsToProps = (dispatch) => {
    return {
        filterPost: bindActionCreators(filterPost, dispatch),
        sortPost: bindActionCreators(sortPost, dispatch),
    }
};

export  default connect(null,putActionsToProps)(App)




