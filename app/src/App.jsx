import * as React from 'react';
import './ge-theme.scss';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import {Box, useTheme} from "@mui/material";
import AuditMessages from "./components/AuditMessages";
import SystemsStatus from "./components/SystemsStatus";

export function App() {
    const {mixins: { toolbar }} = useTheme();

    return (
        <>
            <Header/>
            <main style={{height: `calc(100vh - (${toolbar?.minHeight}px + ${8}px))`}}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr min-content",
                    gap: "1em 1em"
                }}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AuditMessages/>} path="/auditmessages" />
                            <Route element={<Home/>} path="/" />
                        </Routes>
                    </BrowserRouter>
                    {/*<HighchartsReact*/}
                    {/*    highcharts={Highcharts}*/}
                    {/*    options={options}*/}
                    {/*/>*/}
                    <SystemsStatus/>
                </Box>

            </main>
        </>
    );
}