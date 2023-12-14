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
export const listFetchHttp = (apiTransforms) => {
    return fetch(apiTransforms)
        .then(res => res.json())
        .catch(handledError);
};