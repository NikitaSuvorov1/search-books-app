import React from "react";
import {Route, Routes} from 'react-router'
import {Header} from './components/Header/index'
import {Home} from './pages/Home/index'

function App() {


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
