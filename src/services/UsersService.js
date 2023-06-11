import { URL_API_USERS, HEADERS } from '../constants/api_constants.js';

export default class UserService {
    static getUserById(id) {
        return fetch(`${URL_API_USERS}/user/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static getUser() {
        return fetch(`${URL_API_USERS}/users`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(`${URL_API_USERS}/register`, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(`${URL_API_USERS}/users`, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_USERS}/users/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}

