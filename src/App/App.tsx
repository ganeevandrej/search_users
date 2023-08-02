import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "../components/Header";
import {HomePage} from "../Pages/HomePage";
import {SearchPage} from "../Pages/SearchPage";

export const App: React.FC = (): React.JSX.Element => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="search/:query/:page" element={<SearchPage />} />
            </Routes>
        </div>
    );
}