import axios from "axios";
import {
    IUserDetailsResponse,
    ISearchResponse,
    IUserResponse,
    IUserDetails,
    IUser
} from "./interfaces";

export class GitApiService {
    BASE_URL = 'https://api.github.com/';

    getData = async (url: string) => {
        const fullUrl = this.BASE_URL + url;
        const res = await axios.get(fullUrl);

        if(!res.status) {
            throw new Error(`Could not fetch ${fullUrl} received ${res.status}`);
        }

        return res.data;
    }

    getUsers = async (): Promise<IUser[]> => {
        const users = await this.getData("users");
        return users.map(this._transformUsers);
    }

    searchUsers = async (query: string, page: number, sort: string): Promise<ISearchResponse> => {
        const data = await this.getData(this.createUrlSearchUsers(query, page, sort));
        const users: IUser[] = data.items.map(this._transformUsers);
        return {
            users,
            total_count: this.getTotalPage(data)
        };
    }

    getUserDetails = async (login: string): Promise<IUserDetails> => {
        const user = await this.getData("users/" + login);
        return this._transformUsersDetails(user);
    }

    _transformUsersDetails = ({ name, public_repos, followers, following }: IUserDetailsResponse ) => {
        return {
            name,
            followers,
            following,
            publicRepos: public_repos,
        }
    }

    _transformUsers = ({ id, avatar_url, login }: IUserResponse) => {
        return {
            id,
            login,
            avatarUrl: avatar_url,
        }
    }

    getTotalPage = ({total_count}: ISearchResponse ): number => {
        return total_count < 1000 ? Math.ceil(total_count / 30) : 34;
    }

    createUrlSearchUsers = (query: string, page: number, sort: string) => {
        return `search/users?q=${query}&page=${page}&sort=repositories&order=${sort}`;
    }
}