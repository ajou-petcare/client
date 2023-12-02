import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import APP_ROUTE from "../../app/config/route";
import {fetchData} from "../../common/utils/api";
import {LoginContext} from "../../contexts/login-info";

import S from './LoginPage.module.css';

import type {LoginInfo} from "../../app/config/type";
import type {Dispatch, FC, SetStateAction} from "react";




interface props {
    setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginPage: FC<props> = ({ setLogin }) => {
    const { loginInfo, setLoginInfo } = useContext(LoginContext);
    
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    const navigate = useNavigate();
    
    const handleGotoSignup = () => {
        navigate(APP_ROUTE.SIGNUP);
    };
    const handleLogin = () => {
        void (async () => {
            try {
                const response = await fetchData<LoginInfo>(`/login`, 'POST', { username: id, password: pw });
                setLogin(true);
                setLoginInfo(response);
            } catch (e) {
                alert('Login failed');
                console.error(e);
            }
        })();
    };
    
    return (
        <div className={S['container']}>
            <span className={'mb-4'}>반려동물 건강 솔루션<br/><b className={'bold'}>AJOU PETCARE</b> 입니다</span>
            <input onInput={(e: any) => { setId(e.target.value); }} placeholder={'아이디를 입력해주세요.'} />
            <input onInput={(e: any) => { setPw(e.target.value); }} placeholder={'비밀번호를 입력해주세요.'} type={'password'} />
            <div className={S['btn-area']}>
                <button className={S['signup-btn']} onClick={handleGotoSignup}>회원가입</button>
                <button className={S['login-btn']} onClick={handleLogin}
                >로그인</button>
            </div>
        </div>
    );
};

export default LoginPage;
