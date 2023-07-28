import React, {useMemo, useState} from "react";
import style from "./BlockUser.module.css";
import { IUser } from "../../services/gitApiService";
import UserDetails from "../UserDetails";
import {Button} from "@mui/material";

interface PropsBlockUser {
    user: IUser;
}

const BlockUser: React.FC<PropsBlockUser> = ({ user }): React.JSX.Element => {
    const { avatar_url, login, url } = user;
    const [InfoDetails, setInfoDetails] = useState(false);

    const btn_more = (
        <Button
            variant="outlined"
            size="small"
            onClick={() => setInfoDetails(true)}
        >
            подробнее
        </Button>
    );
    const btn_hide = (
        <Button
            variant="outlined"
            size="small"
            onClick={() => setInfoDetails(false)}
        >
            спрятать
        </Button>
    );

    const memoUserDetails = useMemo(() => <UserDetails login={ login } />, [url]);

    return (
        <div className={style.wrapper}>
            <img src={ avatar_url } alt={ login } />
            <div className={style.userInfo}>
                <span className={style.header}>{ login }</span>
                { InfoDetails ? btn_hide : btn_more }
                { InfoDetails && memoUserDetails}
            </div>
        </div>
    );
}

export default BlockUser;