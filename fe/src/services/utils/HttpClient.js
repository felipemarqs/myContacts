import { delay } from '../../utils/delay'

class HttpClient {

    constructor(baseURL) {
        this.baseURL = baseURL
    }

    async get(path) {
        await delay(500)

        const response = await fetch(`${this.baseURL}${path}`);

        const body = await response.json();

        if (response.ok) {
            return body;
        }

        throw new Error(body.error);
    }
}


export default HttpClient;