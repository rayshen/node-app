/**
 * 请求测试
 */
const fetch = require('node-fetch');
/**
 * text
 */
// (async () => {
//     try {
//         // request
//         let response = await fetch('https://github.com/');
//         // parsing
//         let data = await response.text();
//         console.log('data: ', data);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// })();

/**
 * json
 */
// (async () => {
//     try {
//         // request
//         let response = await fetch('https://api.github.com/users/github');
//         // parsing
//         let data = await response.json();
//         console.log('data: ', data);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// })();