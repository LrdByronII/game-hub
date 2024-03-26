import axios from "axios";

export interface Response<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dbfb08266a9e43b2bc51735e98293a1e'
    }
})
