app.factory('HttpResponseCode', function () {
    var service = {
        success: 200,
        unauthorized: 401,
        forbidden: 403,
        notFound: 404,
        badRequest: 422,
        internalServerError: 500
    };
    return service;
});