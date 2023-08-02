import axios from "axios";
import {getTotalPage, createUrlSearchUsers} from "./utils";
import {
    IUserDetailsResponse,
    ISearchResponse,
    IUserResponse,
    IUserDetails,
    IUser, ISearch
} from "./interfaces";

export class GitApiService {
    BASE_URL = 'https://api.github.com/';

    getData = async <T>(url: string): Promise<T> => {
        const fullUrl = this.BASE_URL + url;
        const res = await axios.get(fullUrl);

        if(!res.status) {
            throw new Error(`Could not fetch ${fullUrl} received ${res.status}`);
        }

        return res.data;
    }

    getUsers = async (): Promise<IUser[]> => {
        const users = await this.getData<IUserResponse[]>("users");
        return users.map(this._transformUsers);
    }

    searchUsers = async (query: string, page: number, sort: string): Promise<ISearch> => {
        const data = await this.getData<ISearchResponse>(createUrlSearchUsers(query, page, sort));
        return {
            users: data.items.map(this._transformUsers),
            totalCount: getTotalPage(data.total_count)
        };
    }

    getUserDetails = async (login: string): Promise<IUserDetails> => {
        const user = await this.getData<IUserDetailsResponse>("users/" + login);
        return this._transformUsersDetails(user);
    }

    _transformUsersDetails = ({name, public_repos, followers, following}: IUserDetailsResponse ): IUserDetails => {
        return {
            name,
            followers,
            following,
            publicRepos: public_repos,
        }
    }

    _transformUsers = ({ id, avatar_url, login }: IUserResponse): IUser => {
        return {
            id,
            login,
            avatarUrl: avatar_url,
        }
    }
}