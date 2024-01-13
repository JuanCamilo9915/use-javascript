import { listTransformersHttp } from './services/ajaxHttp.js';

// const doc = document;
// const formatJson = doc.createElement("pre");

window.matchMedia('(min-width: 720px)').addEventListener('change', () => alert('Heloww i am 720px of width'))

listTransformersHttp()
  .then(res => showData(res))
  .catch(err => showData(err));

function showData(sagaTransformers) {
  console.log(JSON.stringify(sagaTransformers, null, 2));
  // formatJson.append(JSON.stringify(sagaTransformers ?? "Hellow World!!!", null, 2));
  // doc.body.appendChild(formatJson);
}

// function showData(user) {
//     setTimeout(() => {
//         if (user?.list) {
//             user.list[0].salary = 207586103;
//             formatJson.textContent = JSON.stringify(user, null, 2);
//         }
//     }, 7000);

//     formatJson.append(JSON.stringify(user, null, 2));
//     doc.body.appendChild(formatJson);
// }
