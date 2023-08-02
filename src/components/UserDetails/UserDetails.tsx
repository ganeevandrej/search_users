import React from "react";
import style from "./UserDetails.module.css";
import {PropsRow, PropsUserDetails} from "../../services/interfaces";

const Row: React.FC<PropsRow> = ({label, value}): React.JSX.Element => {
    return <span>{label}: <span>{value}</span></span>;
}

export const UserDetails: React.FC<PropsUserDetails> = ({details}): React.JSX.Element => {
    const {name, followers, following, publicRepos} = details;

    return (
        <div className={style.wrapper}>
            <Row label="Имя" value={name} />
            <Row label="Подписчиков" value={followers} />
            <Row label="Подпискок" value={following} />
            <Row label="Репозиториев" value={publicRepos} />
        </div>
    );
}