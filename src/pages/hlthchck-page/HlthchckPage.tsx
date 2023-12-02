import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import APP_ROUTE from "../../app/config/route";
import {fetchData} from "../../common/utils/api";
import Loading from "../../components/loading/Loading";
import {LoginContext} from "../../contexts/login-info";

import S from './HlthchckPage.module.css';
import TakePicture from "./TakePicture";

interface HlthModel {
    diagnosis: string;
    foodRecommend: string;
}

const HlthchckPage = () => {
    const { loginInfo, setLoginInfo } = useContext(LoginContext);
    
    const [selected, setSelected] = useState('eye');
    const [image, setImage] = useState('');
    const [picMode, setPicMode] = useState(false);
    const [petId, setPetId] = useState('');
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState<HlthModel>();
    
    const navigator = useNavigate();
    
    const handleClickCamera = () => {
        setPicMode(true);
    };
    
    
    useEffect(() => {
        if (!image) return;
        void (async () => {
            try {
                setLoading(true);
                const response = await fetchData<HlthModel>(`/checkup/${selected}`, 'POST', {
                    image, petName: loginInfo?.pets[0].petname
                });
                setModel(response);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        })();
        
    }, [image]);
    
    useEffect(() => {
        if (!model) return;
        navigator(`${APP_ROUTE.RESULT}?diagnosis=${model.diagnosis}&foodRecommend=${model.foodRecommend}`);
    }, [model]);
    
    
    const handleClickGallary = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            // @ts-ignore
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                // @ts-ignore
                setImage(() => reader.result);
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };
    
    return (
        <div className={S['container']}>
            {loading &&
                <Loading />
            }
            <TakePicture picMode={picMode} setPicMode={setPicMode} setImage={setImage} />
            <h1 className={'mb-16'}>사용자의 적절한 반려동물 사진을 업로드하여<br/>건강을 체크할 수 있습니다.</h1>
            <h2 className={'mb-2'}>모드를 선택해주세요</h2>
            <div className={S['inputs']}>
                <div>
                    <input onChange={() => setSelected('eye')} checked={selected === 'eye'} type={'radio'} id={'eye'} />
                    <label htmlFor={'eye'}>눈 건강</label><br />
                </div>
                <div>
                    <input onChange={() => setSelected('skin')} checked={selected === 'skin'} type={'radio'} id={'skin'} />
                    <label htmlFor={'skin'}>피부 질환</label><br />
                </div>
                <div>
                    <input onChange={() => setSelected('bcs')} checked={selected === 'bcs'} type={'radio'} id={'bcs'} />
                    <label htmlFor={'bcs'}>비만도 상태</label><br />
                </div>
            </div>
            <div className={S['btns']}>
                <div onClick={handleClickCamera} className={S['get-photo']}>
                    <p>📸</p>
                    <span>카메라</span>
                </div>
                <div onClick={handleClickGallary} className={S['get-photo']}>
                    <p>🖼</p>
                    <span>갤러리</span>
                </div>
            </div>
        </div>
    );
};

export default HlthchckPage;
