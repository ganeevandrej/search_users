import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import { useParams } from "react-router";
import Sort from "../Sort";
import UserList from "../UserList";
import {GitApiService, IUser} from "../../services/gitApiService";

const Search: React.FC = (): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [sort, setSort] = useState<string>("desc");
    const [totalPage, setTotalPage] = useState<number>(0);
    const { query, page } = useParams();
    console.log(query, page);

    const gitApiService = new GitApiService();

    const setParamSort = (selected: string) => {
        setSort(selected);
    }

    useEffect(() => {
        // if(query) {
        gitApiService.searchUsers(`search/users?q=${query}&page=${page}`)
            .then(({ users, total_count }) => {
                setUsers(users);
                setTotalPage(total_count)
            });
        // }
    }, [query, page]);

    return (
        <div>
            <Sort sort={ sort } setParamSort={ setParamSort } />
            <UserList users={users} />
            {
                !!totalPage && (
                    <Pagination
                        page={page ? +page : 1}
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/search/${query}/${item.page === 1 ? '' : `${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                )
            }
        </div>
    );
}

export default Search;