import React, { useEffect, useState } from "react";
import { GitApiService, IUser } from "../../services/gitApiService";
import UserList from "../UserList";

const Home: React.FC = (): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const gitApiService = new GitApiService();

    useEffect( () => {
            gitApiService.getUsers()
                .then((users) => {
                    setUsers(users);
                });
    }, []);

    return <UserList users={users} />;
}

export default Home;