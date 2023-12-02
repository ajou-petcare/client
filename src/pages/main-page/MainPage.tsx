import {useContext, useEffect} from "react";

import {LoginContext} from "../../contexts/login-info";

import S from './MainPage.module.css';

const MainPage = () => {
    const { loginInfo, setLoginInfo } = useContext(LoginContext);
    
    useEffect(() => {
        setLoginInfo({ id: 1, username: '박종원', pets: [{ petname: '대박이' }] });
    }, []);
    
    return (
        <div className={S['container']}>
            <h1 className={'mb-2'}>안녕하세요 <b>{loginInfo?.username}</b>님!</h1>
            <h1 className={'mb-22'}><b>{loginInfo?.pets[0].petname}</b>의 건강을 도와드릴게요</h1>
            <div className={'flex items-center justify-center mb-22'}>
                <img src={'/images/logo.png'} />
            </div>
            <span>본 서비스는 AI Hub Data 를 활용한 예측 서비스이며, 전문 수의사의 견해와는 무관합니다</span>
        </div>
    );
};

export default MainPage;
