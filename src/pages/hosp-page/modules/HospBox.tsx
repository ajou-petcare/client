
import S from './HospBox.module.css';

import type {HospData} from "../config/type";
import type {FC} from "react";


interface Props { data: HospData }
const HospBox: FC<Props> = ({data}) => {
    return (
        <div className={S['container']}>
            <h1>{data.name}</h1>
            <p>{data.distance}m</p>
            <p>{data.location}</p>
            <p>{data.tel}</p>
        </div>
    );
};

export default HospBox;
