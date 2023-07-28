import React, {useState} from "react";
import style from "./BlockUser.module.css";
import { IUser } from "../../services/gitApiService";

interface PropsBlockUser {
    user: IUser;
}

const BlockUser: React.FC<PropsBlockUser> = ({ user }): React.JSX.Element => {
    const { avatar_url, login, url } = user;
    const [InfoDetails, setInfoDetails] = useState(false);

    const btn_more = <button onClick={() => setInfoDetails(true)}>подробнее</button>;
    const btn_hide = <button className="hide" onClick={() => setInfoDetails(false)}>спрятать</button>;

    return (
        <div className={style.wrapper}>
            <img src={ avatar_url } alt={ login } />
            <div className={style.userInfo}>
                <span className={style.header}>{ login }</span>
                { InfoDetails ? btn_hide : btn_more }
            </div>
        </div>
    );
}

export default BlockUser;