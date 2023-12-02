import {useContext, useEffect, useState} from "react";

import {fetchData} from "../../common/utils/api";
import {LoginContext} from "../../contexts/login-info";

import S from './StatPage.module.css';



interface StatPageModel {
	skin: string;
	bcs: string;
	eye: string;
}

const StatPage = () => {
    const { loginInfo, setLoginInfo } = useContext(LoginContext);
    const [model, setModel] = useState<StatPageModel>();
	
	
    useEffect(() => {
        void (async () => {
            try {
                const response = await fetchData<StatPageModel>(`/statistics?username=${loginInfo?.username}&petname=${loginInfo?.pets[0].petname}`, 'GET');
                setModel(response);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
	
    return (
        <div className={S['container']}>
            {
                model && (
                    <>
                        <img src={model.bcs} />
                        <img src={model.eye} />
                        <img src={model.skin} />
                    </>
                )
            }
        </div>
    );
};

export default StatPage;
