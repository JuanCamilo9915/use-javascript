const apis = {
    user: 'http://localhost:3100/user',
    hero: 'http://localhost:3100/hero',
    robot: 'http://localhost:3100/saga-transformers'
};

const handledError = (err) => {
    alert('err: ' + err);
    return undefined;
}

export const listTransformersHttp = () => {
    return fetch(apis.robot)
        .then(res => res.json())
        .catch(handledError);
};