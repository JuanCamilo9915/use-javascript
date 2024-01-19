/**
 * 
 * @param { ParamsFetch } api
 * @property ParamsFetch { method, url }
 * @returns fetch
 * @returns err
 */
export const listFetchHttp = (api) => {
    const { method, url } = api;
    const req = { method };

    return fetch(url, req)
        .then(res => res)
        .then(res => res.json())
        .catch(err => {throw {err}});
};