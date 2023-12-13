/**
 * 
 * @param { ParamsXMLRequestHttp } api
 * @property ParamsXMLRequestHttp { method, url }
 * @returns
 */
export const listXMLRequestHttp = (api) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        const { method, url } = api;
        const isReqAsync = true;

        xhr.open(method, url, isReqAsync);
        xhr.onload = () => {
            const isStatusOk = (xhr.readyState === 4 && xhr.status === 200);

            if (isStatusOk) resolve(JSON.parse(xhr.responseText));
            else reject(xhr.statusText);
        };
        xhr.send();
    });
};