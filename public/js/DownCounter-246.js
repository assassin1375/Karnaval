app.factory('DownCounter', function ($interval) {
    return function () {
        var this_ = this;
        this.time = 0;
        this.interval = undefined;
        this.restart = function (count) {
            count = count || 120;
            this_.time = count;
            this_.interval = $interval(function () {
                if (this_.time > 0) {
                    this_.time--;
                }
                else {
                    $interval.cancel(this_.interval);
                }
            }, 1000);
        };
        this.restart();
    };
});