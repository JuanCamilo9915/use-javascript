const handledError = (err) => {
    alert('err: ' + err);
    return undefined;
}

/**
 * 
 * @param { ParamsFetch } apiTransforms
 * @property ParamsFetch { method, url }
 * @returns fetch
 */
export const listFetchHttp = (api) => {
    const { method, url } = api;
    const reqApi = new Request(url, { method });

    return fetch(reqApi)
        .then(res => res.json())
        .catch(handledError);
};