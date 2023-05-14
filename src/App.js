import React from "react";
import {Route, Routes} from 'react-router'
import {Header} from './components/Header/index'
import {Home} from './pages/Home/index'
import {BookInfo} from "./pages/BookInfo";

function App() {


    return (

        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books/:id' element={<BookInfo />} />
            </Routes>
        </div>
    );
}

export default App;
