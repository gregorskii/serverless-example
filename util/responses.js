'use strict';

module.exports = {
  successResponse: (res) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.CORS_DOMAIN
      },
      body: JSON.stringify({
        result: res
      })
    };

    return response;
  },
  errorResponse: (res) => {
    const response = {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': process.env.CORS_DOMAIN
      },
      body: JSON.stringify({
        result: res
      })
    };

    return response;
  }
};
