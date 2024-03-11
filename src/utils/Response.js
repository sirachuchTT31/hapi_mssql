const baseResult = require('./Response_model.js')
const IBaseSingleResult = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (baseResult.IBaseSingleResultModel == data) {
                let response = {
                    result: data.result,
                    status: data.status,
                    status_code: data.status_code,
                    message: data.message,
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }
            else {
                let response = {
                    results: null,
                    status: false,
                    status_code: 400,
                    message: 'Bad request',
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }

        }
        catch (e) {
            reject(e)
        }
    })
}

const IBaseCollectionResults = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (baseResult.IBaseCollectionResultsModel == data) {
                let response = {
                    results: data.results,
                    status: data.status,
                    status_code: data.status_code,
                    message: data.message,
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }
            else {
                let response = {
                    results: null,
                    status: false,
                    status_code: 400,
                    message: 'Bad request',
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }
        }
        catch (e) {
            reject(e)
        }
    })
}


const IBaseCollectionResultsPagination = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (baseResult.IBaseCollectionResultsPaginationModel == data) {
                let response = {
                    results: data.results,
                    status: data.status,
                    status_code: data.status_code,
                    total_record: data.total_record,
                    page: data.page,
                    per_page: data.per_page,
                    message: data.message,
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }
            else {
                let response = {
                    results: null,
                    status: false,
                    status_code: 400,
                    total_record: 0,
                    page: 0,
                    per_page: 0,
                    message: 'Bad request',
                    errorMessage: data.errorMessage
                }
                resolve({
                    ...response
                })
            }

        }
        catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    IBaseSingleResult,
    IBaseCollectionResults,
    IBaseCollectionResultsPagination
}