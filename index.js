const Hapi = require('@hapi/hapi');
const prisma = require('./src/plugin/prisma.js')
const { getAll } = require('./src/controllers/api.controllers.js')
const server = Hapi.server({
    port: 3000,
    host: 'localhost',
})
server.start().then((v) => {
    console.log(`🚀 Server listening ${server.info.uri}🚀`)
    prisma()
}).catch((e) => {
    console.log(e)
    server.stop()
})
server.route({
    method: "GET",
    path: '/Getall',
    // handler: (request, h) => {
    //     return getAll
    // }
    handler: getAll
})

module.exports = server;