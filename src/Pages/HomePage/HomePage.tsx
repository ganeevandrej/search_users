import React, {useEffect, useState} from "react";
import {UserList} from "../../components/UserList";
import {HomeProps, IUser} from "../../services/interfaces";
import {Spinner} from "../../components/Spinner";

export const Home: React.FC<HomeProps> = ({getData}): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);

    useEffect( () => {
        const getUsers = async () => {
            try {
                setLoad(true)
                const users = await getData();
                setUsers(users);
                setError(false);
            } catch (e) {
                setError(true);
            }   finally {
                setLoad(false);
            }
        }

        getUsers()
    }, [getData]);

    const userList = users.length !== 0 && <UserList users={users} />;

    return (
        <>
            {load ? <Spinner /> : userList}
        </>
    );
}

