import React from "react";
import {PropsUserList} from "../../services/interfaces";
import {User} from "../sw-component/sw-components";
import style from "./UserList.module.css";

export const UserList: React.FC<PropsUserList> = ({ users }): React.JSX.Element => {
    return (
        <div className={style.wrapper}>
            <div className={style.blockUsers}>
                {
                    users.map((user) => {
                        return <User user={user} key={user.id} />;
                    })
                }
            </div>
        </div>
    );
}