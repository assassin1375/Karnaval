app.factory('Request', function ($http) {
    return {
        http: function (data, url) {
            return $http({
                url: BASE_URL + url,
                method: "POST",
                data: data,
                headers: {
                    'x-csrf-token': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
    }
});