import { URL_API_COMMANDS, URL_API_COMMAND, HEADERS } from "../constants/api_constants.js";
export default class CommandsService {

    static getCommand() {
        return fetch(URL_API_COMMANDS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getCommandById(id) {
        return fetch(`${URL_API_COMMANDS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static newCommand(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_COMMANDS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(id, params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(`${URL_API_COMMANDS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_COMMANDS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}