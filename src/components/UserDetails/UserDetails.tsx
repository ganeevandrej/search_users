import React, {useEffect, useState} from "react";
import style from "./UserDetails.module.css";
import {GitApiService, IUserDetails} from "../../services/gitApiService";


interface PropsUserDetails {
    login: string;
}

const UserDetails: React.FC<PropsUserDetails> = ({ login }): React.JSX.Element => {
    const [details, setDetails] = useState<IUserDetails>({
        name: "",
        followers: 0,
        following: 0,
        public_repos: 0
    });

    const gitApiService = new GitApiService();

    useEffect(() => {
        gitApiService.getUserDetails(login)
            .then((user) => setDetails(user))
    }, []);

    return (
        <div className={style.wrapper}>
            <span>Имя: <span>{details.name}</span></span>
            <span>Подписчиков: <span>{details.followers}</span></span>
            <span>Подпискок: <span>{details.following}</span></span>
            <span>Репозиториев: <span>{details.public_repos}</span></span>
        </div>
    );
}

export default UserDetails;