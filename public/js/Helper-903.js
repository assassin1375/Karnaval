app.factory('Helper', function ($http, Member) {
    try {
        moment.loadPersian();
    }
    catch (e) {

    }
    var storage = {};
    var service = {
        host: function (arg) {
            arg = arg || '';
            return $('meta[name="host"]').attr('content') + (arg.length > 0 ? (arg[0] == '/' ? arg : '/' + arg) : '');
        },
        csrf: function () {
            return $('meta[name="csrf-token"]').attr('content');
        },
        addCsrf: function (data) {
            data = data || {};
            return angular.extend(data, {
                'x-csrf-token': this.csrf()
            });
        },
        url: function (arg) {
            arg = arg || '';
            return this.host('/members' + (arg[0] == '/' ? arg : '/' + arg));
        },
        memberUrl: function (arg, user) {
            return this.host('/' + this.memberLink(user) + (arg.length > 0 ? (arg[0] == '/' ? arg : '/' + arg) : ''));
        },
        memberLink: function (user) {
            user = user || Member.get();
            var link = 'members/';
            if (user.username != undefined && user.username.length > 0) {
                link += user.username;
            }
            else {
                link += user._id;
            }
            return link;
        },
        viewUrl: function (arg) {
            return this.url('view' + (arg[0] == '/' ? arg : '/' + arg));
        },
        viewRequest: function (arg) {
            if (storage[arg] == undefined) {
                return $http({
                    url: this.viewUrl(arg),
                    method: "GET"
                }).then(function (res) {
                    storage[arg] = res.data;
                    return storage[arg];
                });
            }
            else {
                return storage[arg];
            }
        },
        refreshUser: function () {
            $http({
                url: this.url('me'),
                method: "POST"
            }).then(function (res) {
                res = res.data;
                if (res.success) {
                    storage.user = res.user;
                    $('#auth-user-json').html(JSON.stringify(res.user));
                }
            });
        },
        Date: {
            format: function (timestamp, format) {
                format = format || 'jD jMMMM jYYYY';
                timestamp = parseInt(timestamp) * 1000;
                return moment(timestamp).format(format);
            }
        },
        strRandom: function () {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        },
        redirect: function (url, options) {
            options = angular.extend({
                absolute: false
            }, options);
            window.location.href = options.absolute ? url : this.host(url);
        },
        getQueryStringrByName: function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    };
    return service;
});