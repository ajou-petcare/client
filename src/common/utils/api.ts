const FETCH_METHOD = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
} as const);

type FetchMethod = typeof FETCH_METHOD[keyof typeof FETCH_METHOD];

const DEV_API_URL = 'http://localhost:8080';
const PROD_API_URL = '';

const API_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;

/**
 * @name fetchData
 * @param url
 * @param method
 * @param payload
 * @description for body
 */
async function fetchData<T> (url: string, method: FetchMethod, payload?: any): Promise<T> {
    let request;
    let response;
	
    try {
        request = await fetch(`${API_URL}/api${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            // credentials: 'include'
        });
        response = await request.json() as T;
    } catch (e) {
        console.error(e);
        throw e;
    }
	
    return response;
}

export { fetchData, FETCH_METHOD };
