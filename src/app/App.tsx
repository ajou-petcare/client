import React, {useEffect, useState} from 'react';
import '../common/css/common.css';
import '../common/css/reset.css';
import {Routes, Route, useNavigate} from "react-router-dom";

import Header from "../components/header/Header";
import Navigator from "../components/navigator/Navigator";
import {LoginProvider} from "../contexts/login-info";
import HlthchckPage from "../pages/hlthchck-page/HlthchckPage";
import HospPage from "../pages/hosp-page/HospPage";
import LoginPage from "../pages/login-page/LoginPage";
import MainPage from "../pages/main-page/MainPage";
import ResultPage from "../pages/result-page/ResultPage";
import SignupPage from "../pages/signup-page/SignupPage";
import StatPage from "../pages/stat-page/StatPage";

import S from './App.module.css';
import APP_ROUTE from "./config/route";


function App() {
    const [login, setLogin] = useState(false);
    
    const navigator = useNavigate();
    
    useEffect(() => {
        if (!login) navigator(APP_ROUTE.LOGIN);
        if (login) navigator(APP_ROUTE.MAIN);
    }, [login]);
    
    return (
        <LoginProvider>
            <div className={"App"}>
                {login &&
                    <>
                        <Header />
                        <Navigator />
                    </>
                }
                <article className={S['page-container']}>
                    <Routes>
                        <Route path={APP_ROUTE.LOGIN} element={<LoginPage setLogin={setLogin} />} />
                        <Route path={APP_ROUTE.SIGNUP} element={<SignupPage />} />
                        <Route path={APP_ROUTE.MAIN} element={<MainPage />} />
                        <Route path={APP_ROUTE.HOSP} element={<HospPage />} />
                        <Route path={APP_ROUTE.HLTHCHCK} element={<HlthchckPage />} />
                        <Route path={APP_ROUTE.RESULT} element={<ResultPage />} />
                        <Route path={APP_ROUTE.STAT} element={<StatPage />} />
                    </Routes>
                </article>
            </div>
        </LoginProvider>
    );
}

export default App;
