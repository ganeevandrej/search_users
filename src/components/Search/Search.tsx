import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Sort from "../Sort";
import UserList from "../UserList";
import SearchPagination from "../SearchPagination";
import { GitApiService, IUser } from "../../services/gitApiService";

import styles from './Search.module.css';

const Search: React.FC = (): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [sort, setSort] = useState<string>("desc");
    const [totalPage, setTotalPage] = useState<number>(0);
    const { query, page } = useParams();

    const gitApiService = new GitApiService();

    const setParamSort = (selected: string) => {
        setSort(selected);
    }

    useEffect(() => {
        const url = `search/users?q=${query}&page=${page}&sort=repositories&order=${sort}`;
        gitApiService.searchUsers(url)
            .then(({ users, total_count }) => {
                setUsers(users);
                setTotalPage(total_count);
            })

    }, [query, page, sort]);

    return (
        <div className={styles.wrapper}>
            <Sort sort={ sort } setParamSort={ setParamSort } />
            <UserList users={users} />
            <SearchPagination
                query={query ? query : " "}
                page={page ? page : "1"}
                totalPage={totalPage} />
        </div>
    );
}

export default Search;