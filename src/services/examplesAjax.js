// Ejemplos AJAX HTTP
// (() => {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3000/teams', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//             const response = JSON.parse(xhr.responseText);
//             console.log(response);
//             document.body.textContent = JSON.stringify(response);
//         }
//     };
//     xhr.send();
// })();
// --------------------------------------------------------------------------------------
// var http_request = false;

// function makeRequest(url) {

//     http_request = false;

//     if (window.XMLHttpRequest) { // Mozilla, Safari,...
//         http_request = new XMLHttpRequest();
//         if (http_request.overrideMimeType) {
//             http_request.overrideMimeType('text/xml');
//             // Ver nota sobre esta linea al final
//         }
//     } else if (window.ActiveXObject) { // IE
//         try {
//             http_request = new ActiveXObject("Msxml2.XMLHTTP");
//         } catch (e) {
//             try {
//                 http_request = new ActiveXObject("Microsoft.XMLHTTP");
//             } catch (e) { }
//         }
//     }

//     if (!http_request) {
//         alert('Falla :( No es posible crear una instancia XMLHTTP');
//         return false;
//     }
//     http_request.onreadystatechange = alertContents;
//     http_request.open('GET', url, true);
//     http_request.send();

// }

// function alertContents() {

//     if (http_request.readyState == 4) {
//         if (http_request.status == 200) {
//             // console.log(http_request.responseText);
//             alert(http_request.responseText);
//         } else {
//             alert('Hubo problemas con la petición.');
//         }
//     }

// }
// --------------------------------------------------------------------------------------
// const fe = () => {
//     fetch('http://localhost:3000/teams')
//         .then(res => res.json())
//         .then(res => console.log('res: ', res))
// };

// fe();