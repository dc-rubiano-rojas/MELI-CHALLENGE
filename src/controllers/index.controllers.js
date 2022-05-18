const needle = require('needle')
const { createClient } = require('redis')

const getCategorie = async(id) => {
    const apiResponse = await needle(
        'get',
        `https://df1f5e23-b062-4e9b-be7b-20396b1953b7.mock.pstmn.io/categories/${id}`
    )

    try {
        const client = createClient({
            host: 'localhost',
            port: 6379
        })

        await client.connect();


        const saveResult = await client.set(
            'routes',
            JSON.stringify(`/categories/${id}`)
        );

        console.log(saveResult)
        return apiResponse
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getCategorie
}