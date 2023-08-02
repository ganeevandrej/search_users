export interface IUser {
    id: number;
    login: string;
    avatarUrl: string;
}

export interface IUserResponse {
    id: number;
    login: string;
    avatar_url: string;
}

export interface IUserDetailsResponse {
    name: string,
    public_repos: number;
    followers: number;
    following: number;
}

export interface ISearchResponse {
    items: IUserResponse[],
    total_count: number
}

export interface ISearch {
    users: IUser[],
    totalCount: number
}

export interface IUserDetails {
    name: string,
    publicRepos: number;
    followers: number;
    following: number;
}

export interface IGitApiService {
    getUsers: () => Promise<IUser[]>,
    searchUsers: (query: string, page: number, sort: string) => Promise<ISearch>,
    getUserDetails: (login: string) => Promise<IUserDetails>,
}

export interface HomeProps {
    getData: () => Promise<IUser[]>
}

export interface PropsUserList {
    users: IUser[];
}

export interface SearchBlockProps {
    getData: (query: string, page: number, sort: string) => Promise<ISearch>
}

export interface PropsSort {
    value: string;
    onChange: (select: string) => void
}

export interface PropsSearchPagination {
    totalPage: number;
    page: number;
    query: string;
}

export interface UserBlockProps {
    user: IUser;
    getData: (login: string) => Promise<IUserDetails>
}

export interface PropsUserDetails {
    details: IUserDetails;
}

export interface PropsRow {
    label: string;
    value: string | number;
}