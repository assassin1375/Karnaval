app.factory('ImageUrl', function (Helper, $mdMedia) {
    return {
        make: function (model) {
            return new this.object(model);
        },
        object: function (model) {
            this.model = model;
            this.size = function (size, index) {
                if (size == 'picture-slider') {
                    if ($mdMedia('(min-width: 1440px)')) {
                        size = 'r1368x933';
                    }
                    else if ($mdMedia('(min-width: 1360px)')) {
                        size = 'r1025x830';
                    }
                    else if ($mdMedia('(min-width: 1024px)')) {
                        size = 'r970x645';
                    }
                }
                else if (size == 'picture-full') {
                    size = 'r1360x660';
                }

                if (size == 'picture-slider' || size == 'picture-full') {
                    if ($mdMedia('(min-width: 768px)')) {
                        size = '1024x0';
                    }
                    else if ($mdMedia('(min-width: 414px)')) {
                        size = '768x0';
                    }
                    else {
                        size = '414x0';
                    }
                }
                index = index == undefined ? 0 : index;
                if (this.model.pictures != undefined && this.model.pictures.length > 0) {
                    return Helper.url('image/' + size + '/' + model.user_id + '/' + this.model.pictures[index].name)
                }
                return '';
            };
            this.withName = function (name, size) {
                if (this.model != undefined && this.model.user_id != undefined) {
                    return Helper.url('image/' + size + '/' + model.user_id + '/' + name)
                }
                return '';
            };
        },
        userProfile: function (user) {
            if (user != undefined && user._id != undefined && user.image_profile != undefined) {
                return Helper.url('/image/profile/' + user._id + '/' + user.image_profile);
            }
            else {
                return Helper.url('/image/profile/user/user-profile.jpg');
            }
        },
        userCover: function (user) {
            var size = '';
            if ($mdMedia('(min-width: 1600px)')) {
                size = '1920';
            }
            else if ($mdMedia('(min-width: 1440px)')) {
                size = '1600';
            }
            else if ($mdMedia('(min-width: 1360px)')) {
                size = '1440';
            }
            else if ($mdMedia('(min-width: 1024px)')) {
                size = '1360';
            }
            else if ($mdMedia('(min-width: 768px)')) {
                size = '1024';
            }
            else if ($mdMedia('(min-width: 414px)')) {
                size = '768';
            }
            else {
                size = '414';
            }

            if (user != undefined && user._id != undefined && user.image_cover != undefined) {
                var url = Helper.url('/image/cover/' + size + '/' + user._id + '/' + user.image_cover);
            }
            else {
                var url = Helper.url('/image/cover/user/user-cover.jpg');
            }
            return url;
        },
        karnavalAvatar: function () {
            return Helper.host('/images/karnaval-avatar.jpg');
        }
    }
});