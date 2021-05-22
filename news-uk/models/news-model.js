/*
 * @filename news-model.js
 * @author Abhishek Shahdeo
 * @usage contains functions to fetch news either in uk (top headlines) or everything's news (with filters)
 */

/*
 * @declare https to make external API calls
 */
const https = require('https');
/*
 * @module object payment that houses required functionalities of this file
 * @usage const newsModel = require('../models/newsModel');
 */
const newsModel = {

    /*
     * @method getNews
     * @params param1 params is an object of filters passed as query params in route, param2 callback function
     * @usage retrieves news from headlines API
     */
    getNews (params, callback) {
        // Define our URL of API endpoint
        const url = `${process.env.API_URL}top-headlines/?`;

        // Define default params if not present in parameters
        // Default country value gb
        params.country = params.country?params.country:'gb';
        // Make the request for API call and data processing
        this.makeRequest(url, params, callback);
    },


    /*
     * @method getAllNews
     * @params param1 params is an object of filters passed as query params in route, param2 callback function
     * @usage retrieves news from everything API
     */
    getAllNews (params, callback) {
        // Define our URL of API endpoint
        const url = `${process.env.API_URL}everything/?`;
        // Make the request for API call and data processing
        this.makeRequest(url, params, callback);
    },

    /*
     * @method makeRequest
     * @params param1 url is url to which request needs to be made,
     * param2 is an object of filters passed as query params in route, param3 callback function
     * @usage retrieves news from everything API
     */
    makeRequest (url, params, callback) {
        // loop around our query params and create URL to be called
        for (key in params) {
            // check and filter out empty values
            if (params[key].length) {
                // append key-values to the URL
                url += `${key}=${params[key]}&`;
            }
        }
        // append our api key to make the request
        url += `apiKey=${process.env.API_KEY}`;

        // Make tha API request with our IRL and use callback for result(s)
        https.get(url, (res) => {
            // check for successful response
            if(res.statusCode === 200) {
                // initialize our result string as our response will come in chunk of strings
                let result = '';
                // set encoding to utf-8, since the encoding is not utf-8 by default (default encoding iso-8859-2)
                res.setEncoding('utf8');
                // listen to data event and append chunks to our result string
                res.on('data', (chunk) => {
                    result += chunk;
                });
                // listen to end event and process our result
                res.on('end', () => {
                    // our result is string, parse it to JSON
                    result = JSON.parse(result);
                    // add and set error key to false
                    result.error = false;
                    // return and execute the callback with our result
                    return callback(result);
                });
            // in case of unsuccessful response
            } else {
                // log the statusCode
                console.log(res.statusCode);
                // our API sends out 400 code when required params are not present in request, check for it
                if(res.statusCode === 400) {
                    // return and execute callback with our reponse object with error set to true and other info
                    return callback({
                        error       : true,
                        status      : 'ok',
                        code        : 'missingParams',
                        totalResults: 0,
                        articles    : [],
                        message     : 'Required parameters are missing, the scope of your search is too broad. Please search with any of the following parameters and try again: title, body, sources, domains.'
                    });
                }
                // return and execute callback handle any other status from server, set error to true and an adequate message
                return callback({
                    error : true,
                    msg   : 'Some error ocurred, please try after some time!'
                });
            }

        // listen to error event, occurs when some error has happened
        }).on('error', (e) => {
            // log the error
            console.log(JSON.stringify(e));
            // return and execute callback, set error to true and an adequate message
            return callback({
                error : true,
                msg   : 'Some error ocurred, please try after some time!'
            });
        });
    }

};

// export our module so that it can be imported in route
module.exports = newsModel;