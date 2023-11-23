import {useEffect, useState} from "react";

import S from './HlthchckPage.module.css';
import TakePicture from "./TakePicture";

const HlthchckPage = () => {
    const [selected, setSelected] = useState('eye-chck');
    const [image, setImage] = useState('');
    const [picMode, setPicMode] = useState(false);
    
    const handleClickCamera = () => {
        setPicMode(true);
    };
    
    
    useEffect(() => {
        console.log('image', image);
    }, [image]);
    
    
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
            <TakePicture picMode={picMode} setPicMode={setPicMode} setImage={setImage} />
            <h1 className={'mb-16'}>사용자의 적절한 반려동물 사진을 업로드하여<br/>건강을 체크할 수 있습니다.</h1>
            <h2 className={'mb-2'}>모드를 선택해주세요</h2>
            <div className={S['inputs']}>
                <div>
                    <input onChange={() => setSelected('eye-chck')} checked={selected === 'eye-chck'} type={'radio'} id={'eye-chck'} />
                    <label htmlFor={'eye-chck'}>눈 건강</label><br />
                </div>
                <div>
                    <input onChange={() => setSelected('skin-chck')} checked={selected === 'skin-chck'} type={'radio'} id={'skin-chck'} />
                    <label htmlFor={'skin-chck'}>피부 질환</label><br />
                </div>
                <div>
                    <input onChange={() => setSelected('bcs-chck')} checked={selected === 'bcs-chck'} type={'radio'} id={'bcs-chck'} />
                    <label htmlFor={'bcs-chck'}>비만도 상태</label><br />
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
