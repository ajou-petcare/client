import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import APP_ROUTE from "../../app/config/route";

import S from './SignupPage.module.css';

interface passString {
    origin : string
    again : string
}

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState<passString>({
        origin : '',
        again : ''
    });
    const Correct = () => {
        const empty = password.origin === '';
        const same = password.origin === password.again;
        if(empty){
            return null;
        }
        return(
            <div>
                <span className={S[same?'password-same':'password-unsame']}>
                    {same? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
                </span>
            </div>
        );
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword((prevPass) => ({
            ...prevPass,
            origin : event.target.value
        }));
    };
    const handlePasswordAgainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword((prevPass) => ({
            ...prevPass,
            again : event.target.value
        }));
    };

    const handleSignup = () => {
        navigate(APP_ROUTE.LOGIN);
    };

    return (
        <div className={S['container']}>
            <input placeholder={'이름'} />
            <input placeholder={'아이디'} />
            <input placeholder={'이메일'} />
            <input
                placeholder={'비밀번호를 입력해주세요.'}
                value={password.origin}
                onChange={handlePasswordChange}
                type={'password'}
            />
            <input
                placeholder={'비밀번호를 한번 더 입력해주세요.'}
                value={password.again}
                onChange={handlePasswordAgainChange}
                type={'password'}
            />
            <Correct />
            <div className={S['btn-area']}>
                <button className={S['signup-btn']} onClick={handleSignup}>회원가입</button>
            </div>
        </div>
    );
};

export default SignupPage;
