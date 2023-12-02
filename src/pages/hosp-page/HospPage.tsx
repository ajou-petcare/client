import {useEffect, useState} from "react";

import {fetchData} from "../../common/utils/api";

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
        void (async () => {
            let ret;
            
            try {
                ret = getGetLoc();
            } catch (e) {
                alert("GPS permission error");
                console.error(e);
                return;
            }
            
            if (ret.latitude === 0 || ret.longitude === 0) {
                alert('Please enable GPS permission');
                return;
            }
            
            try {
                const response = await fetchData<HospPageModel>(`/findHosp/findNearHosp?latitude=${ret.latitude}&longitude=${ret.longitude}`, 'GET');
                setModel(response);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    
    return (
        <div className={S['container']}>
            <h1>사용자의 위치정보를 기반으로 영업 중인 동물병원을 거리순으로 제시합니다.</h1>
            {
                (model && model.length) ? model.map((d, i) => (
                    <HospBox key={`HospBox-${i}`} data={d} />
                )) : <h1>GPS 권한을 허용해주세요. 미허용시 해당 서비스 이용이 제한됩니다.</h1>
            }
        </div>
    );
};

export default HospPage;
