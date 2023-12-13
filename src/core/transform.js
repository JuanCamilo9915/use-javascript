import { listFetchHttp } from '../services/ajaxHttp.js';

const apis = {
  user: 'http://localhost:3100/user',
  hero: 'http://localhost:3100/hero',
  car: 'http://localhost:3100/cards',
  robot: 'http://localhost:3100/saga-transformers'
};

function showData(sagaTransformers) {
  console.log('---------------------------------------------------');
  console.log(JSON.stringify(sagaTransformers, null, 2));

  setTimeout(() => {
    console.log('\n\n\n---------------------------------------------------');
    sagaTransformers.pages = 7;
    sagaTransformers.list.push({ name: "prueba", range: { id: 7, name: "Test" } });
    console.log(JSON.stringify(sagaTransformers, null, 2));
  }, 7000);
}

export function listTransformsHttp() {
  listFetchHttp(apis.robot)
    .then(res => console.log('res fetch\n\n', res))
    .catch(err => console.log(err));
  // .then(res => showData(res))
  // .catch(err => showData(err));
}