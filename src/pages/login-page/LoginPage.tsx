import {useNavigate} from "react-router-dom";

import APP_ROUTE from "../../app/config/route";

import S from './LoginPage.module.css';

import type {Dispatch, FC, SetStateAction} from "react";


interface props {
    setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginPage: FC<props> = ({ setLogin }) => {
    const navigate = useNavigate();
    
    const handleGotoSignup = () => {
        navigate(APP_ROUTE.SIGNUP);
    };
    const handleLogin = () => {
        // TODO:: Login
        setLogin(true);
    };
    
    return (
        <div className={S['container']}>
            <span className={'mb-4'}>반려동물 건강 솔루션<br/><b className={'bold'}>AJOU PETCARE</b> 입니다</span>
            <input placeholder={'아이디를 입력해주세요.'} />
            <input placeholder={'비밀번호를 입력해주세요.'} type={'password'} />
            <div className={S['btn-area']}>
                <button className={S['signup-btn']} onClick={handleGotoSignup}>회원가입</button>
                <button className={S['login-btn']} onClick={handleLogin}
                >로그인</button>
            </div>
        </div>
    );
};

export default LoginPage;
