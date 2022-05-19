const needle = require('needle')

const getCategorieMeliConsumer = async(id) => {
    const apiResponse = await needle(
        'get',
        `https://df1f5e23-b062-4e9b-be7b-20396b1953b7.mock.pstmn.io/categories/${id}`
    )
    return apiResponse
}

module.exports = {
    getCategorieMeliConsumer
}