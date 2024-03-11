const server = require('../../index.js')
const Controller = require('../controllers/api.controllers.js')

const routers = [
    {
        method: 'GET',
        path: '/api/getemp',
        config: Controller.getemployeeAll
    },
    {
        method: 'GET',
        path: '/api/getempwhereempno',
        config: Controller.getemployeeWhereEmpNo
    },
    {
        method: 'GET',
        path: '/api/getempsearch',
        config: Controller.getemployeeLike
    },
    {
        method: 'GET',
        path: '/api/getemppagination',
        config: Controller.getemployeePagination
    }
]
module.exports = routers