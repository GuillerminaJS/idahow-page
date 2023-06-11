import { URL_API_NEWS, HEADERS } from '../constants/api_constants.js';
export default class NewsService {
    static getNews() {
        return fetch(URL_API_NEWS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getNewsById(id) {
        return fetch(`${URL_API_NEWS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static newNews(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_NEWS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_NEWS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_NEWS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}