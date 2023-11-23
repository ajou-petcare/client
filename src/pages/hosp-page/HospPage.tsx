import {useEffect, useState} from "react";

import {HOSP_DUMMY} from "./config/dummy";
import S from './HostPage.module.css';
import HospBox from "./modules/HospBox";

import type {HospPageModel} from "./config/type";


function getGetLoc() {
    const ret = { latitude: 0, longitude: 0 };
    
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                ret.latitude = position.coords.latitude;
                ret.longitude = position.coords.longitude;
            },
            (error) => {
                console.error("err" + error.code, error.message);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    
    return ret;
}

const HospPage = () => {
    const [model, setModel] = useState<HospPageModel>([]);
    
    useEffect(() => {
        getGetLoc();
        setModel(HOSP_DUMMY);
    }, []);
    
    return (
        <div className={S['container']}>
            <h1>사용자의 위치정보를 기반으로 영업 중인 동물병원을 거리순으로 제시합니다</h1>
            {
                model && model.map((d, i) => (
                    <HospBox key={`HospBox-${i}`} data={d} />
                ))
            }
        </div>
    );
};

export default HospPage;
