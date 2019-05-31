app.controller('AppController', function ($scope, $timeout, Auth, Helper, DownCounter) {

    Auth.userPromise().then(function (user) {
        $timeout(function () {
            $('.login-section,.account-menu').removeClass('hidden');
        });
    });

    $scope.AuthDialog = {
        disableButtons: false,
        login: function (data) {
            $scope.AuthDialog.disableButtons = true;
            Auth.login(data).then(function (res) {
                $scope.AuthDialog.disableButtons = false;
                res = res.data;
                if (res.success) {
                    window.location.href = res.url;
                } else {
                    Materialize.toast(res.errors[0], 4000, 'red-toast');
                    $('#forgotPassword').css({'display': 'block'}).show('slow');
                }
            });
        },
        register: function (data) {
            $scope.AuthDialog.disableButtons = true;
            Auth.register(data).then(function (res) {
                $scope.AuthDialog.disableButtons = false;
                res = res.data;
                if (res.success) {

                    $('#part-one').removeClass('slideInRight').addClass('slideOutRight');
                    $('#part-two').removeClass('slideOutLeft').addClass('slideInLeft');
                    $('.back-to-confirm').addClass('disable karnaval-color');
                    $('#signUp-email-mobile').addClass('disable karnaval-color');
                    var toast = '';
                    if (res.column == 'phone') {
                        toast = 'کد فعالسازی از طریق پیام کوتاه یا تماس صوتی به شماره شما ارسال خواهد شد'
                    }
                    else {
                        toast = 'کد فعالسازی به ایمیل شما ارسال شد';
                    }
                    Materialize.toast(toast, 4000, 'karnaval-toast'); // 4000 is the duration of the toast
                    if (res.column == 'phone') {
                        $scope.AuthDialog.activeButtonText = 'ارسال دوباره در صورت عدم دریافت کد '
                    }
                    else {
                        $scope.AuthDialog.activeButtonText = 'در حال ارسال کد فعالسازی به ایمیل ';
                    }

                    $scope.AuthDialog.activateTime = new DownCounter();

                } else {
                    Materialize.toast(res.errors[0], 4000, 'red-toast');
                }
            });
        },
        activate: function (data) {
            $scope.AuthDialog.disableButtons = true;
            Auth.activate(data).then(function (res) {
                $scope.AuthDialog.disableButtons = false;
                res = res.data;
                if (res.success) {
                    window.location.href = res.url;
                } else {
                    Materialize.toast(res.errors[0], 4000, 'red-toast');
                }
            });
        },
        forget: function (data) {
            $scope.AuthDialog.disableButtons = true;
            Auth.forget(data).then(function (res) {
                $scope.AuthDialog.disableButtons = false;
                res = res.data;
                if (res.success) {
                    if (res.column == 'phone') {
                        $('#retrieve-password').removeClass('slideOutLeft slideInLeft').addClass('slideOutRight');
                        $('#confirm-sms').removeClass('slideOutRight slideOutLeft').addClass('slideInLeft');
                        $scope.AuthDialog.activateForgetTime = new DownCounter();
                        data.phone = data.email;
                    } else {
                        Materialize.toast('ایمیل برای شما ارسال شد', 4000, 'karnaval-toast');
                        $('#retrieve-password').removeClass('slideOutRight slideInLeft').addClass('slideOutLeft');
                        $('#login-form').removeClass('slideOutRight').addClass('slideInRight');
                    }
                } else {
                    Materialize.toast(res.errors[0], 4000, 'red-toast');
                }
            });
        },
        activateForget: function (data) {
            $scope.AuthDialog.disableButtons = true;
            Auth.activateForget(data).then(function (res) {
                $scope.AuthDialog.disableButtons = false;
                res = res.data;
                if (res.success) {
                    window.location.href = res.url;
                } else {
                    Materialize.toast(res.errors[0], 4000, 'red-toast');
                }
            });
        },
        googleAuth: function () {
            var win = window.open(Helper.url('auth/google'), "google-oauth", "width=500,height=500");
            var pollTimer = window.setInterval(function () {
                if (win.closed !== false) { // !== is required for compatibility with Opera
                    window.clearInterval(pollTimer);
                    var url = window.localStorage.getItem('member-url');
                    if (url != null && url.indexOf('/members/') >= 0) {
                        window.localStorage.removeItem('member-url');
                        window.location.href = url;
                    }
                }
            }, 100);
        }
    }
});