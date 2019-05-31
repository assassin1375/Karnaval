;

app.controller('MainPageController',
    function MainPageController($scope, Request) {
        var morePostLoaded = false;
        var morePostLoading = false;
        $scope.showPagination = false;
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            var height = $(this).height();
            var indicatorTop = $('.pagination-helper').offset().top;
            if (top + height > indicatorTop) {
                loadMorePost();
            }
        });

        function loadMorePost() {
            if (!morePostLoading) {
                morePostLoading = true;
                $('.post-loader-wrapper').fadeIn();
                Request.http({}, '/post-view/' + (parseInt(CURRENT_PAGE) + 1)).then(function (response) {
                    response = response.data;
                    $('#post-items').append(response.view);
                    morePostLoaded = true;
                    $scope.showPagination = true;
                    $('.post-loader-wrapper').hide();
                    persianNumber();
                    initPostSlider();
                });
            }
        }
    });
$(document).ready(function () {
    $('#side-bar-left, .content, #side-bar-right')
        .theiaStickySidebar({
            additionalMarginTop: 0
        });
});
$('#block-header-slider .section-lg-picture').find('.owl-next').on('click', function () {
    $('.lSNext').trigger('click');

});
$('#block-header-slider .section-lg-picture').find('.owl-prev').on('click', function () {
    $('.lSPrev').trigger('click');

});
// $(document).ready(function () {
//     $('.owl-prev').html('<i class="fa fa-angle-left owl-prev-icon"></i>');
//     $('.owl-next').html('<i class="fa fa-angle-right owl-next-icon"></i>');
//     $('.owl-prev-icon').parent('.owl-prev').each(function (index, value) {
//         if ($(value).hasClass('inline-icon')) {
//         } else {
//             $(value).hide();
//
//         }
//     });
//     $('.owl-next-icon').parent('.owl-next').each(function (index, value) {
//         if ($(value).hasClass('inline-icon')) {
//         } else {
//             $(value).hide();
//
//         }
//     });
// });
$(document).ready(function () {
    $("#block-header-slider.slide").lightSlider({
        item: 1,
        loop: true,
        keyPress: true,
        auto: true,
        speed: 1500,
        pause: 3000,
        cssEasing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        pauseOnHover: true,
        pager: false
    });
    initPostSlider();
    setTimeout(function () {
        $('#block-header-slider.slide .item-block-header').removeClass('hidden');
    }, 100);
});

function initPostSlider() {
    $.each($(".post-item-slider"), function (index, value) {
        if (!$(value).hasClass('lSSlide')) {
            $(value).lightSlider({
                item: 1,
                loop: true,
                keyPress: true,
                auto: true,
                pauseOnHover: true,
                pager: false,
                speed: 1500,
                pause: 3000,
                cssEasing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
                prevHtml: '<i class="fa fa-angle-left owl-prev-icon"></i>',
                nextHtml: '<i class="fa fa-angle-right owl-next-icon"></i>',
            });
        }
    });
    setTimeout(function () {
        $('.post-item-slider a').removeClass('hidden');
    }, 100);
}