import {createContext, useEffect, useState} from "react";

import type {LoginInfo} from "../../app/config/type";
import type {FC, ReactNode} from "react";

interface LoginContextType {
	loginInfo: LoginInfo | null;
	setLoginInfo: (d: LoginInfo) => void;
}

const LoginContext = createContext<LoginContextType>({
    loginInfo: null,
    setLoginInfo: (d) => { return d; },
});

interface pProps { children: ReactNode; }
const LoginProvider: FC<pProps> = ({ children }) => {
    const [item, setItem] = useState<LoginContextType['loginInfo']>(null);
	
	
    useEffect(() => {
        console.log('GLOBAL LoginProvider: ', item);
    }, [item]);
	
	
    const setLoginInfo = (item: LoginInfo) => {
        setItem(() => item);
    };
	
	
    return (
        <LoginContext.Provider
            value={{
                loginInfo: item,
                setLoginInfo,
            }}
        >
            { children }
        </LoginContext.Provider>
    );
};

export {LoginProvider, LoginContext};
