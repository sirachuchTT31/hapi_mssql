const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
// const getAll = {
//     handler: async () => {
//         try {
//             const { data, error } = await prisma.user.findFirst().then((v) => {
//                  console.log('v',v)
//             }).catch((e) => {
//                 console.log('',e)
//             })
//             if (error) {
//                 return {
//                     status: false,
//                     stauts_code: 500,
//                     message: 'INTERNAL ERROR',
//                 }
//             }
//             else {
//                 return {
//                     status: false,
//                     stauts_code: 500,
//                     message: 'INTERNAL ERROR',
//                     results: data
//                 }
//             }

//         }
//         catch (e) {
//             // throw e
//         }
//     }
// }

const getAll = (async (req) => {
    // try {
        const data = await prisma.employee.findFirst().then((v) => {
            return v
        }).catch((e) => {
            return false
        })
        if (data != false) {
            return {
                status: true,
                status_code: 200,
                result: data
            }
        }
    // }
    // catch (e) {
    //     // throw e
    // }
})

module.exports = {
    getAll
}