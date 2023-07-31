import React, { memo, useEffect, useState } from "react";
import style from "./BlockUser.module.css";
import {GitApiService, IUser, IUserDetails} from "../../services/gitApiService";
import UserDetails from "../UserDetails";
import {Button} from "@mui/material";
import Spinner from "../Spinner";

interface PropsBlockUser {
    user: IUser;
}

const BlockUser: React.FC<PropsBlockUser> = ({ user }): React.JSX.Element => {
    const [InfoDetails, setInfoDetails] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(true);
    const [details, setDetails] = useState<IUserDetails>({
        name: "",
        followers: 0,
        following: 0,
        public_repos: 0
    });

    const gitApiService = new GitApiService();
    const { avatar_url, login } = user;

    useEffect(() => {
        if(InfoDetails) {
            gitApiService.getUserDetails(login)
                .then((user) => {
                    console.log(user);
                    setDetails(user)
                })
            setLoad(false);
        }
    }, [InfoDetails]);

    const clickBtn = () => {
        setInfoDetails((state) => !state);
    };

    const btn_more = (
        <Button variant="outlined" size="small" onClick={clickBtn}>
            подробнее
        </Button>
    );
    const btn_hide = (
        <Button variant="outlined" size="small" onClick={clickBtn}>
            спрятать
        </Button>
    );

    const MemoUserDetails = memo(UserDetails);
    const isLoaded = load ? <Spinner /> : <MemoUserDetails details={details} />;

    return (
        <div className={style.wrapper}>
            <img src={ avatar_url } alt={ login } />
            <div className={style.userInfo}>
                <span className={style.header}>{ login }</span>
                { InfoDetails ? btn_hide : btn_more }
                { InfoDetails && isLoaded }
            </div>
        </div>
    );
}

export default BlockUser;