import { useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import {NAV_ROUTE} from "./config";
import S from './Navigator.module.css';

import type {JSX} from "react";


// DEPRECATE
const DefaultNav = () => {
    return (
        <nav className={S['container']}>
            {
                NAV_ROUTE.map((d, i) => {
                    return (
                        <Link to={d.to} key={`nav-${i}`}>
                            <div className={'mb-2'}>{d.icon}</div>
                            <span>{d.name}</span>
                        </Link>
                    );
                })
            }
        </nav>
    );
};

const Navigator = () => {
    const location = useLocation();
    const [returnEl, setReturnEl] = useState<JSX.Element>(<></>);
    
    useEffect(() => {
        const _loc = location.pathname.split('/').at(1);
        setReturnEl(<DefaultNav />);
    }, [location]);
    
    return returnEl;
};

export default Navigator;
