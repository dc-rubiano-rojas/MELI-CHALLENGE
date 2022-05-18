// const { ClientClosedError } = require('redis');
// const redis = require('redis')

// const redisConnectSaveStat = async(route, id) => {
//     const client = redis.createClient({
//         host: 'localhost',
//         port: 6379,
//         password: '123456',
//     })

//     await client.connect();
//     await client.set(route, id);
// }

// module.exports = {
//     redisConnectSaveStat
// };


// class SingletonRedis {

//     static _client

//     constructor() {
//         redis.createClient({
//                 host: "127.0.0.1",
//                 port: 6379,
//             })
//             .connect()
//             .then(() => {
//                 console.log('Redis connected')
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     static getInstance() {
//         if (this._client) {
//             return this._client;
//         }

//         this._client = new SingletonRedis();
//         return this._client;
//     }

//     async save(id) {
//         await this._client.set(
//             'routes',
//             JSON.stringify(`/categories/${id}`)
//         );
//     };
// }

// module.exports = SingletonRedis

// const { createClient } = require('redis')
// const redisClientFunct = async function maindb() {
//     const redisClient = createClient({
//         host: "127.0.0.1",
//         port: 6379,
//     });
//     await redisClient.connect();
//     return redisClient
// }



// module.exports = redisClientFunct();

// // redisClient
// //     .on('ready', function() {
// //         console.log(`Client connected to redis and ready to use`);
// //     });
// // redisClient.on('connect', function() {
// //     console.log(`connected to redis`);
// // });
// // redisClient.on('error', function(error) {
// //     console.log(error);
// // });
// // redisClient.on('end', function(error) {
// //     console.log('Client disconnected from redis');
// // });
// // process.on('SIGINT', () => {
// //     redisClient.quit();
// // })

// // module.exports = redisClient;