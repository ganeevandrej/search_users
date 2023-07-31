import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from "../Header";
import Home from "../Home";
import Search from "../Search";

const App: React.FC = (): React.JSX.Element => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="search/:query/:page" element={ <Search /> } />
            </Routes>
        </div>
    );
}

export default App;
