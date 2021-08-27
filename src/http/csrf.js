// import api from './api'

// function getCookies(){
//     var pairs = document.cookie.split(";");
//     var cookies = {};
//     for (var i=0; i<pairs.length; i++){
//         var pair = pairs[i].split("=");
//         cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
//     }
//     return cookies;
// }


// export default {
//     getToken(){
//         if(getCookies()['XSRF-TOKEN']){
//             return new Promise(resolve => {
//                 resolve(getCookies()['XSRF-TOKEN'])
//             })
//         }
//         return api.get('/csrf-cookie').catch(() => {})
//     }
// }
