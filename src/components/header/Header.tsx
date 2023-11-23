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

interface DefaultHeaderProps { headerName: string; }
const DefaultHeader: FC<DefaultHeaderProps> = ({ headerName }) => {
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


const Header: FC = () => {
    const location = useLocation();
    const [returnEl, setReturnEl] = useState<JSX.Element>(<></>);
    
    useEffect(() => {
        const _loc = location.pathname.split('/').at(1);
        if (_loc === '') setReturnEl(<HomeHeader />);
        if (_loc === 'hosp') setReturnEl(<DefaultHeader headerName={'근처 동물병원 찾기'} />);
        if (_loc === 'hlthchck') setReturnEl(<DefaultHeader headerName={'반려동물 건강 진단'} />);
    }, [location]);
    
    return (
        <header className={S['container']}>
            {returnEl}
        </header>
    );
};

export default Header;
