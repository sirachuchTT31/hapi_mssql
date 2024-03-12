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
    },
    {
        method: 'POST',
        path : '/api/updateemp',
        config : Controller.updateEmployeeWhereId
    }
]
module.exports = routers