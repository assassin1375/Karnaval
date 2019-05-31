app.factory('Dialog', function ($mdDialog, $q) {
    return {
        create: function (options) {
            options = angular.extend({
                templateUrl: '',
                clickOutsideToClose: true,
                multiple: true,
                preserveScope: true
            }, options);

            return $mdDialog.show({
                templateUrl: '',
                clickOutsideToClose: true,
                multiple: true,
                preserveScope: true
            });
        },
        confirm: function (options) {
            var d = $q.defer();
            this.create({
                templateUrl: 'partial.dialog_confirm.html',
                clickOutsideToClose: false,
                controller: function ($scope) {
                    $scope.options = angular.extend({
                        title: 'تایید حذف',
                        content: 'آیا از حذف این بخش اطمینان دارید؟',
                        ok: 'تایید',
                        cancel: 'لغو'
                    }, options || {});
                    $scope.resolve = function () {
                        d.resolve();
                        $mdDialog.hide();
                    };
                    $scope.reject = function () {
                        d.reject();
                        $mdDialog.hide();
                    };
                }
            });

            return d.promise;
        },
        close: function ($event) {
            $mdDialog.cancel();
            angular.element($event.currentTarget).remove();
        }
    };
});