import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {fetchBooks} from './redux/thunk/booksThunk'
import {Route, Routes} from 'react-router'
import {Header} from './components/Header/index'
import {Home} from './pages/Home/index'

function App() {

    // const {items, status, category, sortBy, searchValue} = useSelector((state) => state.books)
    // const dispatch = useDispatch()
    //
    // React.useEffect(async () => {
    //     dispatch(fetchBooks(category, sortBy, searchValue))
    // }, [category, sortBy, searchValue])

    return (

        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
