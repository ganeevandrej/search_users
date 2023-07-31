import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import { useParams } from "react-router";
import Sort from "../Sort";
import UserList from "../UserList";
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

    const searchRequest = async (url: string) => {
        const { users, total_count } = await gitApiService.searchUsers(url);
        setUsers(users);
        setTotalPage(total_count);
    }

    useEffect(() => {
        const url = `search/users?q=${query}&page=${page}`;
        searchRequest(url);
    }, [query, page]);

    useEffect(() => {
        const url = `search/users?q=${query}&page=${page}&sort=repositories&order=${sort}`;
        if(users.length) {
            searchRequest(url);
        }
    }, [sort]);

    return (
        <div className={styles.wrapper}>
            <Sort sort={ sort } setParamSort={ setParamSort } />
            <UserList users={users} />
            <div className={styles.blockPagination}>
                {
                    !!totalPage && (
                        <Pagination
                            page={page ? +page : 1}
                            size="large"
                            count={totalPage}
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Link}
                                    to={`/search/${query}/${item.page}`}
                                    {...item}
                                />
                            )}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Search;