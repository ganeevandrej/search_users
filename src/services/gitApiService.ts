import axios from "axios";

export interface IUser {
    id: number;
    login: string;
    avatar_url: string;
}

export interface IUserDetails {
    name: string,
    public_repos: number;
    followers: number;
    following: number;
}

export class GitApiService {
    BASE_URL = 'https://api.github.com/';

    getData = async (url: string) => {
        const fullUrl = this.BASE_URL + url;
        const res = await axios.get(fullUrl);

        if(!res.status) {
            throw new Error(`Could not fetch ${fullUrl} received ${res.status}`);
        }

        return await res.data;
    }

    getUsers = async () => {
        const users = await this.getData("users");
        return await users.map(this._transformUsers);
    }

    searchUsers = async (url: string) => {
        const data = await this.getData(url);
        const users = await data.items.map(this._transformUsers);
        return {
            users,
            total_count: data.total_count < 1000 ? Math.ceil(data.total_count / 30) : 34
        };
    }

    getUserDetails = async (login: string) => {
        const user = await this.getData("users/" + login);
        return this._transformUsersDetails(user);
    }

    _transformUsersDetails = ({ name, public_repos, followers, following }: IUserDetails ) => {
        return {
            name,
            public_repos,
            followers,
            following
        }
    }

    _transformUsers = ({ id, avatar_url, login }: IUser) => {
        return {
            id,
            login,
            avatar_url,
        }
    }
}