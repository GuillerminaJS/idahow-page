import { URL_API_COMMENTS, HEADERS } from '../constants/api_constants';
export default class CommentsService {

    static getC() {
        return fetch(URL_API_COMMENTS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getCById(id) {
        return fetch(`${URL_API_COMMENTS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static newC(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_COMMENTS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_COMMENTS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_COMMENTS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}