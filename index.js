const Hapi = require('@hapi/hapi');
const prisma = require('./src/plugin/prisma.js')
const { getAll } = require('./src/controllers/api.controllers.js')
const routers = require('./src/routes/api.routers.js')


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })
    server.start().then((v) => {
        console.log(`🚀 Server listening ${server.info.uri}🚀`)

    }).catch((e) => {
        console.log(e)
        server.stop()
    })
    prisma()
    routers.forEach((path) => server.route(path))
}
init()