export const axios = require('axios').default
var https = require('https')
require('dotenv').config();


export const getTopHeadlines = async () => {
    const responseData = axios.get("https://gktc67guayda7mce55x6m4p2zi0icyxy.lambda-url.us-east-1.on.aws/")
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
    return responseData
}
