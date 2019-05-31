app.factory('Auth', function ($http, Helper, Member, $q, $location, HttpResponseCode) {
    var storage = {};
    var service = {
        login: function (data) {
            var this_ = this;
            return $http({
                url: Helper.url('login'),
                data: data,
                skipAuthorization: true,
                method: "POST",
            }).then(function (res) {
                if (res.data.success) {
                    this_.setToken(res.data.token);
                }
                return res;
            });
        },
        register: function (data) {
            return $http({
                url: Helper.url('register'),
                data: data,
                skipAuthorization: true,
                method: "POST",
            }).then(function (res) {
                return res;
            });
        },
        activate: function (data) {
            var this_ = this;
            return $http({
                url: Helper.url('activate'),
                data: data,
                skipAuthorization: true,
                method: "POST",
            }).then(function (res) {
                if (res.data.success) {
                    this_.setToken(res.data.token);
                }
                return res;
            });
        },
        forget: function (data) {
            return $http({
                url: Helper.url('password/email'),
                data: data,
                skipAuthorization: true,
                method: "POST",
            }).then(function (res) {
                return res;
            });
        },
        activateForget: function (data) {
            var this_ = this;
            return $http({
                url: Helper.url('password/confirm-sms'),
                data: data,
                skipAuthorization: true,
                method: "POST",
            }).then(function (res) {
                if (res.data.success) {
                    this_.setToken(res.data.token);
                }
                return res;
            });
        },
        tokenName: 'token',
        logout: function () {
            var this_ = this;
            return $http({
                url: Helper.url('logout'),
                method: "POST"
            }).then(function (res) {
                res = res.data;
                if (res.success) {
                    // this_.deleteToken();
                    Helper.redirect('/');
                }
            });
        },
        setToken: function (token) {

        },
        deleteToken: function () {
            // window.localStorage.removeItem(this.tokenName);
            // this.info = {};
        },
        token: function (force) {
            var this_ = this;
            force = force || false;
            if (storage.tokenRefreshPromise) {
                return storage.tokenRefreshPromise;
            }
            var token = window.localStorage.getItem(this.tokenName);
            if (token == null) {
                return $q.when(null);
            }
            var expired;
            try {
                expired = jwtHelper.isTokenExpired(token);
            } catch (e) {
                expired = true;
            }

            if (expired || force) {
                var deferred = $q.defer();
                console.log(deferred);
                $http({
                    url: Helper.url('refresh'),
                    method: "POST",
                    skipAuthorization: true,
                    headers: {
                        authorization: 'Bearer ' + token
                    }
                }).then(function (res) {
                    res = res.data;
                    if (res.success) {
                        window.localStorage.setItem('token', res.token);
                        deferred.resolve(res.token);
                    } else if (res.status == HttpResponseCode.unauthorized) {
                        this_.deleteToken();
                        deferred.resolve(null);
                    }
                }, function (res) {
                    if (res.status == HttpResponseCode.unauthorized) {
                        this_.deleteToken();
                        deferred.resolve(null);
                    }
                }, function () {
                    storage.tokenRefreshPromise = undefined;
                });
                storage.tokenRefreshPromise = deferred.promise;
                return storage.tokenRefreshPromise;
            }
            else {
                return $q.when(token);
            }
        },
        tokenBearer: function (force) {
            return this.token(force).then(function (token) {
                return 'Bearer ' + token;
            });
        },
        tokenObject: function (force) {
            return this.tokenBearer(force).then(function (tokenBearer) {
                return {
                    authorization: tokenBearer
                };
            });
        },
        check: function (force) {
            var user = this.user();
            return user != undefined && user._id != undefined;
            // return this.user(force).then(function () {
            //     service.info.checked = true;
            //     return true;
            // }, function () {
            //     service.info.checked = true;
            //     return false;
            // });
        },
        tokenPayload: function (force) {
            return this.token(force).then(function (token) {
                try {
                    return jwtHelper.decodeToken(token);
                } catch (e) {

                }
                return {}
            });
        },
        userID: function (force) {
            try {
                return this.user()._id;
            }
            catch (e) {
                return undefined;
            }
            // return this.tokenPayload(force).then(function (tokenPayload) {
            //     try {
            //         return tokenPayload.sub;
            //     } catch (e) {
            //
            //     }
            //     return ''
            // });
        },
        user: function (force) {
            if (storage.user == undefined) {
                try {
                    storage.user = JSON.parse($('#auth-json').html());
                }
                catch (e) {

                }
            }
            return storage.user;
            // var this_ = this;
            // force = force || false;
            // if (storage.userPromise) {
            //     return storage.userPromise;
            // }
            // if (force) {
            //     var deferred = $q.defer();
            //     $http({
            //         url: Helper.url('me'),
            //         method: "POST"
            //     }).then(function (res) {
            //         if (res.data.success) {
            //             this_.info.user = res.data.user;
            //             deferred.resolve(this_.info.user);
            //         }
            //         deferred.reject(res);
            //     }, function (res) {
            //         deferred.reject(res);
            //     }, function () {
            //         storage.userPromise = undefined;
            //     });
            //     storage.userPromise = deferred.promise;
            //     return storage.userPromise;
            // }
            // else {
            //     return $q.when(this.info.user);
            // }
        },
        refreshUser: function () {
            var this_ = this;
            return this.loadUser().then(function (user) {
                var oldUser = this_.user();
                var newUser = user;
                storage.user = newUser;
                if (newUser.url != undefined && oldUser.url != newUser.url) {
                    window.location.href = newUser.url + $location.url();
                }
                else {
                    if (this_.isMember()) {
                        Member.merge(newUser);
                    }
                }
            });
        },
        loadUser: function () {
            var this_ = this;
            if (storage.loadPromise) {
                return storage.loadPromise;
            }
            storage.loadPromise = $http({
                url: Helper.url('me'),
                method: "POST"
            }).then(function (res) {
                storage.loadPromise = undefined;
                if (res.data.success) {
                    return res.data.user;
                }
                return undefined;
            });
            return storage.loadPromise;
        },
        userPromise: function () {
            var this_ = this;
            if (storage.userPromise) {
                return storage.userPromise;
            }
            var deferred = $q.defer();
            this.loadUser().then(function (user) {
                deferred.resolve(user);
                storage.user = user;
            });
            storage.userPromise = deferred.promise;
            return storage.userPromise;
        },
        isMember: function (member, force) {
            member = member || Member.get();
            var userID = this.userID();
            return userID != undefined && member._id != undefined && userID == member._id;
            // return this.userID(force).then(function (userID) {
            //     member = member || Member.get();
            //     try {
            //         return userID != undefined && member._id != undefined && userID == member._id;
            //     } catch (e) {
            //     }
            //     return false;
            // });
        }
    };
    return service;
});
