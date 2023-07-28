import axios from "axios";

export interface IUser {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
}

export class GitApiService {
    BASE_URL = 'https://api.github.com/search/users?';
    countPage = 0;

    getData = async (url: string) => {
        const fullUrl = this.BASE_URL + url;
        const res = await axios.get(fullUrl);

        if(!res.status) {
            throw new Error(`Could not fetch ${fullUrl} received ${res.status}`);
        }

        this.countPage = Math.ceil(res.data / 30);

        return await res.data.items.map(({ id, avatar_url, login, url }: IUser) => {
            return {
                id,
                login,
                url,
                avatar_url,
            }
        });
    }
}