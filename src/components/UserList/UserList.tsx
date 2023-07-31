import React from "react";
import BlockUser from "../BlockUser";
import { IUser } from "../../services/gitApiService";
import style from "./UserList.module.css";

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