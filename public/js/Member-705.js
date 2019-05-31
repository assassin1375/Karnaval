app.factory('Member', function () {
    var storage = {};
    var service = {
        get: function () {
            if (storage.member == undefined) {
                try {
                    this.set(JSON.parse($('#member-json').html()));
                }
                catch (e) {
                    this.set({});
                }
            }
            return storage.member;
        },
        set: function (member) {
            storage.member = member;
        },
        merge: function (member) {
            storage.member = angular.extend(storage.member, member);
        }
    };
    return service;
});
