import React from "react";
import style from "./UserDetails.module.css";
import {IUserDetails} from "../../services/gitApiService";



interface PropsUserDetails {
    details: IUserDetails;
}

const UserDetails: React.FC<PropsUserDetails> = ({ details }): React.JSX.Element => {
    const { name, followers, following, public_repos } = details;

    return (
        <div className={style.wrapper}>
            <span>Имя: <span>{name}</span></span>
            <span>Подписчиков: <span>{followers}</span></span>
            <span>Подпискок: <span>{following}</span></span>
            <span>Репозиториев: <span>{public_repos}</span></span>
        </div>
    );
}

export default UserDetails;