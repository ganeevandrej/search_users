import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {UserDetails} from "../UserDetails";
import {Spinner} from "../Spinner";
import {Error} from "../Error";
import {initialDetailsUser} from "../../services/constants";
import {IUserDetails, UserBlockProps} from "../../services/interfaces";
import style from "./User.module.css";

export const UserBlock: React.FC<UserBlockProps> = ({user, getData}): React.JSX.Element => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [details, setDetails] = useState<IUserDetails>(initialDetailsUser);
    const [error, setError] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);
    const {avatarUrl, login} = user;

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                setLoad(true);
                const userDetails = await getData(login);
                setDetails(userDetails);
                setError(false);
            } catch (e) {
                setError(true);
            } finally {
                setLoad(false);
            }
        }
        showDetails && getUserDetails();
    }, [showDetails, getData, login]);

    const clickBtn = () => {
        setShowDetails((prevState) => !prevState);
    };

    const renderSearchBlock = showDetails && <UserDetails details={details} />

    return (
        <div className={style.wrapper}>
            <img src={avatarUrl} alt={login} />
            <div className={style.userInfo}>
                <span className={style.header}>{login}</span>
                <div className={style.blockBtn}>
                    <Button variant="outlined" size="small" onClick={clickBtn}>
                        { showDetails ? "спрятать" : "подробнее" }
                    </Button>
                </div>
                {error ? <Error /> : load ? <Spinner /> : renderSearchBlock}
            </div>
        </div>
    );
}