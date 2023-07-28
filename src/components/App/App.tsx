import React, {useEffect, useState} from 'react';
import Header from "../Header";
import style from './App.module.css';
import { GitApiService, IUser } from "../../services/gitApiService";
import Sort from "../Sort";
import UserList from "../UserList";

export type sortType = "ascending" | "descending";

const App: React.FC = (): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query, setQuery] = useState<string>('');
    const [sort, setSort] = useState<string>("desc");
    const [page, setPage] = useState<number>(1);

    const gitApiService = new GitApiService();

    const getSearchParam = (label: string) => {
        setQuery(label);
    }

    const setParamSort = (selected: string) => {
        setSort(selected);
    }

    useEffect( () => {
        if(!query) {
            gitApiService.getUsers()
                .then((users) => {
                    setUsers(users);
                });
        }
    }, [query]);

    useEffect(() => {
        if(query) {
            gitApiService.searchUsers(`search/users?q=${query}&page=${page}`)
                .then((users) => setUsers(users));
        }
    }, [query, page]);

    return (
        <div className={style.wrapper}>
            <Header getSearchParam={ getSearchParam } />
            <Sort sort={sort} setParamSort={ setParamSort } />
            <UserList users={users} />
        </div>
    );
}

export default App;
