app.factory('Toast', function (toastr) {
    return {
        error: function (arg, options) {
            options = angular.extend({}, options || {});
            var html = this.buildHtml(arg, 'toast-error');
            toastr.error(
                '<div class="md-toast-content" md-colors="{background:\'red\'}">' +
                html +
                '</div>', options);
        },
        success: function (arg, options) {
            options = angular.extend({}, options || {});
            var html = this.buildHtml(arg);
            toastr.success(
                '<div class="md-toast-content" md-colors="{background:\'karnavalb\'}">' +
                html +
                '</div>', options);
        },
        buildHtml: function (arg, c) {
            c = c == undefined ? 'toast-success' : c;
            var html = '';
            if (angular.isArray(arg)) {
                html += '<ul class="' + c + '">';
                angular.forEach(arg, function (value) {
                    html += '<li>' + value + '</li>';
                });
                html += '</ul>';
            }
            else {
                html += '<div class="' + c + '">' + arg + '</div>';
            }
            return html;
        }
    }

});