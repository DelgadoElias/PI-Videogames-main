const dotenv = require('dotenv');

/**
 * getApiData - get the data from the api.
 * 
 * @param {String} param - The route parameter to the API endpoint
 * @description - Get the data from the API only if we need GET endpoints.
 * If we need POST endpoints then we need another function
 * 
 * @return {Object} - The data from the API endpoint
 */
export const getApiData = (param) => {
    const env = dotenv.config().parsed;
    console.log(env);

    const BASE_URL = process.env.REACT_BASE_URL;
    console.log(process.env.BASE_URL);
}
export default getApiData;