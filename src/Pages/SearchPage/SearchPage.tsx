import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Sort} from "../../components/Sort";
import {UserList} from "../../components/UserList";
import {SearchPagination} from "../../components/SearchPagination";
import {DEFAULT_PAGE, DEFAULT_QUERY, SortRotation} from "../../services/constants";
import {IUser, SearchBlockProps} from "../../services/interfaces";
import {Spinner} from "../../components/Spinner";
import {Error} from "../../components/Error";

export const SearchBlock: React.FC<SearchBlockProps> = ({getData}): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [sort, setSort] = useState<string>(SortRotation.DESC);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);
    const { query = DEFAULT_QUERY, page = DEFAULT_PAGE } = useParams();

    const setParamSort = (selected: string) => {
        setSort(selected);
    }

    useEffect(() => {
        const searchUsers = async () => {
            try {
                setLoad(true);
                const {users, totalCount} = await getData(query, Number(page), sort);
                setUsers(users);
                setTotalPage(totalCount);
                setError(false);
            } catch (e) {
                setError(true);
            } finally {
                setLoad(false);
            }
        }

        searchUsers()
    }, [query, page, sort, getData]);

    const isLoad = load ? <Spinner /> : <UserList users={users} />;
    const isError = error ? <Error /> : isLoad;

    return (
        <div>
            <Sort value={sort} onChange={setParamSort} />
            {isError}
            <SearchPagination
            query={query}
            page={Number(page)}
            totalPage={totalPage ?? 1 }
            />
        </div>
    );
}