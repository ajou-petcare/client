import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import S from './Header.module.css';

import type {FC, JSX} from "react";


const Icons = () => {
    return (
        <div className={'flex gap-4'}>
            <span>🔔</span>
        </div>
    );
};


const HomeHeader = () => {
    return (
        <div className={S['home']}>
            <span className={'bold'}>AJOU_PETCARE</span>
            <Icons />
        </div>
    );
};

interface MenuHeaderProps { headerName: props['headerName']; }
const DefaultHeader: FC<MenuHeaderProps> = ({ headerName }) => {
    return (
        <div className={S['menu']}>
            <Link to={'/'}>
                <span>&lt;</span>
            </Link>
            <span>{headerName}</span>
            <Icons />
        </div>
    );
};


interface props { headerName: string; }
const Header: FC<props> = ({ headerName }) => {
    const location = useLocation();
    const [returnEl, setReturnEl] = useState<JSX.Element>(<></>);
    
    useEffect(() => {
        const _loc = location.pathname.split('/').at(1);
        if (_loc === '') setReturnEl(<HomeHeader />);
        else setReturnEl(<DefaultHeader headerName={headerName} />)
    }, [location, headerName]);
    
    return (
        <header className={S['container']}>
            {returnEl}
        </header>
    );
};

export default Header;
