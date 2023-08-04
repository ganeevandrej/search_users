import {LIMIT_USERS, LIMIT_USERS_PAGE, MAX_LENGTH_PAGINATION} from "../constants";

export const getTotalPage = (totalCount: number): number => {
    return totalCount < LIMIT_USERS ? Math.ceil(totalCount / LIMIT_USERS_PAGE) : MAX_LENGTH_PAGINATION;
}

export const createUrlSearchUsers = (query: string, page: number, sort: string): string => {
    return `search/users?q=${query}&page=${page}&sort=repositories&order=${sort}`;
}

