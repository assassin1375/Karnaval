// var socket = io('https://www.karnaval.ir', {
//     'path': '/stat/socket.io'
// });
// var key = Date.now() + '|' + Math.random().toString(36).substring(7);
// socket.on('connect', function () {
//     socket.emit('begin', {
//         referer: document.getElementById("shahrekhabar") == null ? REFERER : 'http://www.shahrekhabar.com/',
//         title: document.title,
//         key: key
//     });
// });
// // setInterval(function () {
// //     socket.emit('update', {
// //         key: key
// //     });
// // }, 5000);
//
// window.onbeforeunload = function () {
//     socket.emit('end', {
//         key: key
//     });
// };
//
// var anchors = document.querySelectorAll('a');
// for (var i = 0; i < anchors.length; i++) {
//     anchors[i].addEventListener('click', handler, false);
// }
//
// function handler(e) {
//     if (e.path != undefined) {
//         for (var i = 0; i < e.path.length; i++) {
//             if (e.path[i].nodeName != undefined && e.path[i].nodeName == "A" && e.path[i].href != undefined && e.path[i].href.indexOf(window.location.href + '#') != 0 && e.path[i].href.indexOf('#') != 0) {
//                 socket.emit('next', {
//                     next: e.path[i].href,
//                     key: key
//                 });
//             }
//         }
//     }
//
// }