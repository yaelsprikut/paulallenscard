export const axios = require('axios').default
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get('country')
console.log("country: ", country)

export const getTopHeadlines = async () => {
    const responseData = axios.get(process.env.REACT_APP_NEWS_API, {
      params: {
        country: country ? country : 'ca'
      }
    })
    .then(function (response: any) {
      // console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
    return responseData
}
