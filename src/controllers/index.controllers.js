const { getCategorieMeliConsumer } = require('../consumer/index.consumer')
const { createClient } = require('redis')


const getCategorie = async(id) => {
    const apiResponse = getCategorieMeliConsumer(id);

    try {
        const client = createClient({
            host: 'redis',
            port: 6379
        })

        await client.connect();

        const saveResult = await client.set(
            'routes',
            JSON.stringify(`/categories/${id}`)
        );

        console.log(saveResult)
    } catch (error) {
        console.log(error)
    }
    return apiResponse

}

module.exports = {
    getCategorie
}