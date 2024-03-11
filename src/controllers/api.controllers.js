const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const BaseResult = require('../utils/Response.js')
const BaseInterface = require('../utils/Response_model.js')
const getemployeeAll = {
    handler: async (request, reply) => {
        try {
            const data = await prisma.employee.findMany({
                select: {
                    EmpNo: true,
                    FirstNameTH: true,
                    LastNameTH: true
                }
            }).then((v) => {
                return v
            }).catch((e) => {
                return e
            })
            if (data?.length > 0) {
                BaseInterface.IBaseCollectionResultsModel.results = data
                BaseInterface.IBaseCollectionResultsModel.status = true
                BaseInterface.IBaseCollectionResultsModel.status_code = 200
                BaseInterface.IBaseCollectionResultsModel.message = 'Get List data successfully'
                BaseInterface.IBaseCollectionResultsModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResults(BaseInterface.IBaseCollectionResultsModel))
            }
            else {
                BaseInterface.IBaseCollectionResultsModel.results = null
                BaseInterface.IBaseCollectionResultsModel.status = false
                BaseInterface.IBaseCollectionResultsModel.status_code = 200
                BaseInterface.IBaseCollectionResultsModel.message = 'Data not found'
                BaseInterface.IBaseCollectionResultsModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResults(BaseInterface.IBaseCollectionResultsModel))
            }

        }
        catch (e) {

        }
    }
}

const getemployeeWhereEmpNo = {
    handler: async (request, reply) => {
        try {
            const requestId = request.query.emp_no
            console.log(requestId)
            const data = await prisma.employee.findFirst({
                where: {
                    EmpNo: requestId
                },
                select: {
                    EmpNo: true,
                    FirstNameTH: true,
                    LastNameTH: true
                }
            }).then((v) => {
                return v
            }).catch((e) => {
                return e
            })
            if (data) {
                BaseInterface.IBaseSingleResultModel.result = data
                BaseInterface.IBaseSingleResultModel.status = true
                BaseInterface.IBaseSingleResultModel.status_code = 200
                BaseInterface.IBaseSingleResultModel.message = 'Get data successfully'
                BaseInterface.IBaseSingleResultModel.errorMessage = null
                return reply.response(await BaseResult.IBaseSingleResult(BaseInterface.IBaseSingleResultModel))
            }
            else {
                BaseInterface.IBaseSingleResultModel.result = null
                BaseInterface.IBaseSingleResultModel.status = false
                BaseInterface.IBaseSingleResultModel.status_code = 200
                BaseInterface.IBaseSingleResultModel.message = 'Data not found'
                BaseInterface.IBaseSingleResultModel.errorMessage = null
                return reply.response(await BaseResult.IBaseSingleResult(BaseInterface.IBaseSingleResultModel))
            }

        }
        catch (e) {

        }
    }
}

const getemployeeLike = {
    handler: async (request, reply) => {
        try {
            const key = request.query.text
            const data = await prisma.employee.findMany({
                select: {
                    EmpNo: true,
                    FirstNameTH: true,
                    LastNameTH: true
                },
                where: {
                    OR: [
                        {
                            EmpNo: {
                                contains: key
                            }
                        },
                        {
                            FirstNameTH: {
                                contains: key
                            }
                        },
                        {
                            LastNameTH: {
                                contains: key
                            }
                        }
                    ]
                }
            }).then((v) => {
                return v
            }).catch((e) => {
                return e
            })
            if (data?.length > 0) {
                BaseInterface.IBaseCollectionResultsModel.results = data
                BaseInterface.IBaseCollectionResultsModel.status = true
                BaseInterface.IBaseCollectionResultsModel.status_code = 200
                BaseInterface.IBaseCollectionResultsModel.message = 'Get List data successfully'
                BaseInterface.IBaseCollectionResultsModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResults(BaseInterface.IBaseCollectionResultsModel))
            }
            else {
                BaseInterface.IBaseCollectionResultsModel.results = null
                BaseInterface.IBaseCollectionResultsModel.status = false
                BaseInterface.IBaseCollectionResultsModel.status_code = 200
                BaseInterface.IBaseCollectionResultsModel.message = 'Data not found'
                BaseInterface.IBaseCollectionResultsModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResults(BaseInterface.IBaseCollectionResultsModel))
            }
        }
        catch (e) {

        }
    }
}


const getemployeePagination = {
    handler: async (request, reply) => {
        try {
            const page = Number(request.query.page)
            const per_page = Number(request.query.per_page)
            const data = await prisma.employee.findMany({
                select: {
                    EmpNo: true,
                    FirstNameTH: true,
                    LastNameTH: true
                },
                skip: page,
                take: per_page
            }).then((v) => {
                return v
            }).catch((e) => {
                return e
            })
            if (data?.length > 0) {
                BaseInterface.IBaseCollectionResultsPaginationModel.results = data
                BaseInterface.IBaseCollectionResultsPaginationModel.status = true
                BaseInterface.IBaseCollectionResultsPaginationModel.status_code = 200
                BaseInterface.IBaseCollectionResultsPaginationModel.total_record = data?.length
                BaseInterface.IBaseCollectionResultsPaginationModel.page = page
                BaseInterface.IBaseCollectionResultsPaginationModel.per_page = per_page
                BaseInterface.IBaseCollectionResultsPaginationModel.message = 'Get List data successfully'
                BaseInterface.IBaseCollectionResultsPaginationModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResultsPagination(BaseInterface.IBaseCollectionResultsPaginationModel))
            }
            else {
                BaseInterface.IBaseCollectionResultsPaginationModel.results = null
                BaseInterface.IBaseCollectionResultsPaginationModel.status = false
                BaseInterface.IBaseCollectionResultsPaginationModel.status_code = 400
                BaseInterface.IBaseCollectionResultsPaginationModel.total_record = data?.length
                BaseInterface.IBaseCollectionResultsPaginationModel.page = 0
                BaseInterface.IBaseCollectionResultsPaginationModel.per_page = 0
                BaseInterface.IBaseCollectionResultsPaginationModel.message = 'Bad request'
                BaseInterface.IBaseCollectionResultsPaginationModel.errorMessage = null
                return reply.response(await BaseResult.IBaseCollectionResultsPagination(BaseInterface.IBaseCollectionResultsPaginationModel))
            }

        }
        catch (e) {

        }
    }
}
module.exports = {
    getemployeeAll,
    getemployeeWhereEmpNo,
    getemployeeLike,
    getemployeePagination
}