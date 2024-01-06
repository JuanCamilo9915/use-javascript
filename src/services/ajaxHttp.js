/**
 * 
 * @param { ParamsFetch } api
 * @property ParamsFetch { method, url }
 * @returns fetch
 * @returns throw { msg }
 */
export const listFetchHttp = (api) => {
    const { method, url } = api;
    const reqApi = new Request(url, { method });

    return fetch(reqApi)
        .then(res => res.json())
        .catch(err => { throw { msg: err.message } });
};