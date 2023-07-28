import React from "react";
import style from "./UserList.module.css";
import { IUser } from "../../services/gitApiService";
import BlockUser from "../BlockUser";

interface PropsUserList {
    users: IUser[];
}

const UserList: React.FC<PropsUserList> = ({ users }): React.JSX.Element => {
    return (
        <div className={style.wrapper}>
            <div className={style.blockUsers}>
                {
                    users && users.map((user) => {
                        return <BlockUser user={ user } key={ user.id } />;
                    })
                }
            </div>
        </div>
    );
}

export default UserList;