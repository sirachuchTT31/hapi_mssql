const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const connectDB = (() => {
    prisma.$connect().then((v) => {
        console.log("connect db success !")
    }).catch((e) => {
        prisma.$disconnect()
    })
})

module.exports = connectDB