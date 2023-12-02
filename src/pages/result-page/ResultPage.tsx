import {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {parseQueryString} from "../../common/utils/query";
import {LoginContext} from "../../contexts/login-info";

import S from './ResultPage.module.css';
const ResultPage = () => {
    const { loginInfo, setLoginInfo } = useContext(LoginContext);
    
    const navigator = useNavigate();
    const location = useLocation();
    const queries = parseQueryString(location.search);
    
    if (!loginInfo || !Object.keys(queries).length) return <></>;
    
    
    return (
        <div>
            <p><b>{loginInfo?.pets[0].petname}의 건강 상태는 다음과 같습니다</b></p>
            {
                // @ts-ignore
                queries['diagnosis']
                    ?
                    <div>
                        {/*// @ts-ignore*/}
                        <p><b>{queries['diagnosis']}</b> 증상이 의심됩니다. 가까운 동물병원 내원을 추천드립니다</p>
                        {/*// @ts-ignore*/}
                        <p>{queries['foodRecommendation']}</p>
                    </div>
                    :
                    <div>
                        <h1>증상이 없는 것으로 예측됩니다.</h1>
                    </div>
            }
        </div>
    );
};

export default ResultPage;
