import axios from "axios";

export interface IUser {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
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
        const res = await axios.get(fullUrl, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if(!res.status) {
            throw new Error(`Could not fetch ${fullUrl} received ${res.status}`);
        }

        // const func = (str: string, symbol_1: string, symbol_2: string = "") => {
        //     if(symbol_2) {
        //         return str.slice(str.indexOf(symbol_1) + 1, str.indexOf(symbol_2));
        //     }
        //     return str.slice(str.indexOf(symbol_1) + 1, str.lastIndexOf(symbol_1));
        // }
        // const links_pages = res.headers.link.split(" ", 4);
        // const link_1 = func(links_pages[0], '<','>');
        // const link_2 = func(links_pages[2], '<','>');
        // const naneLink_1 = func(links_pages[1], '"');
        // const naneLink_2 = func(links_pages[3], '"');
        //
        //
        // const pages = {
        //     [naneLink_1]: link_1,
        //     [naneLink_2]: link_2
        // }
        // console.log(pages);

        return await res.data;
    }

    getUsers = async () => {
        const users = await this.getData("users");
        return await users.map(this._transformUsers);
    }

    searchUsers = async (url: string) => {
        const users = await this.getData(url);
        return await users.items.map(this._transformUsers);
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

    _transformUsers = ({ id, avatar_url, login, url }: IUser) => {
        return {
            id,
            login,
            url,
            avatar_url,
        }
    }
}