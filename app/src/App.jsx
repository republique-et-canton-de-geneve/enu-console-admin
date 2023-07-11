import * as React from 'react';
import './ge-theme.scss';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import { useTheme } from "@mui/material";

export function App() {
    const {mixins: { toolbar }} = useTheme();

    return (
        <>
            <Header/>
            <main style={{height: `calc(100vh - (${toolbar?.minHeight}px + ${8}px))`}}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Home/>} path="*" />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}