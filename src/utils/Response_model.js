const IBaseSingleResultModel = {
    result: {},
    status: false,
    status_code: 0,
    message: '',
    errorMessage: ''
}
const IBaseCollectionResultsModel = {
    results: [],
    status: false,
    status_code: 0,
    message: '',
    errorMessage: ''
}

const IBaseCollectionResultsPaginationModel = {
    results: [],
    status: false,
    status_code: 0,
    total_record: 0,
    page: 0,
    per_page: 0,
    message: '',
    errorMessage: '',
}

module.exports = {
    IBaseSingleResultModel,
    IBaseCollectionResultsModel,
    IBaseCollectionResultsPaginationModel
}