$.ajaxSetup({
    headers: {'x-csrf-token': $('meta[name="csrf-token"]').attr('content')}
});
var user_data = null;
var Interval = null;
var sms_confirm_data = null;
$(window).scroll(function () {
    var scrollingElement = document.scrollingElement || document.documentElement;
    if (scrollingElement.scrollTop > 500) {
        $('.btn-top-scroll').show();
    } else {
        $('.btn-top-scroll').hide();
    }
});
// function addTargetTagLink(section, type) {
//     $(section).each(function (index, value) {
//         $(value).attr('target', type);
//     })
// }
// function changeTargetTagA(target, value) {
//     $(target).attr('target', value);
// }
// setTimeout(function () {
//     changeTargetTagA('.site-logo a', '_self');
//     changeTargetTagA('.pagination a', '_self');
//     changeTargetTagA('#slide-out li a', '_self');
//     changeTargetTagA('.header a', '_self');
//     changeTargetTagA('.set-rate-attraction', '_self');
// }, 1000);

$('.btn-top-scroll').click(function () {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
});
$('.header').find('.sub-li-menu-first li').mouseover(function () {
    $('.header .overly').show();
});
$('.header').find('.sub-li-menu-first-top-menu-one li , .sub-li-menu-first-top-menu-one li .mega-sub-menu-li').mouseleave(function () {
    if ($('.header .overly').is(':visible')) {
        $('.header .overly').hide();
    }
});
$('.header').find('.section-btn-header li').mouseleave(function () {
    if ($('.header .overly').is(':visible')) {
        $('.header .overly').hide();
    }
});

$('.header').find('.sub-li-menu-first').mouseleave(function () {
    if ($('.sub-li-menu-first').is(':visible')) {
        $('.header .overly').hide();
    }
});
$('.head-search-box,.search-box-body').on('click', function (e) {
    e.stopPropagation();
});
$('.search-box').find('.fa-times').on('click', function () {
    $('.search-box-body').removeClass('show');
    $('.search-box-body').html('');
    $('#input_search_box').val('');
    $('.head-search-box').removeClass('show-head-search-box');
    $('.close-search-icons').find('.fa-search').removeClass('show-search-icon');
    setTimeout(function () {
        $('.search-box').hide();
    }, 200);
    $('.show-search-icons .fa-search').show();
});
$('.show-search-icons').click(function () {
    defaultMenuPost();
    $('.close-search-icons').hide();
    $('.input-field').hide();
    $('.site-logo-search-box').hide();
    setTimeout(function () {

        $('.search-box-body').addClass('show');
        $('.close-search-icons').show().addClass('fadeIn');
        $('.input-field').show().addClass('fadeIn');
        $('.site-logo-search-box').show().addClass('fadeIn');
        $('#input_search_box').focus();
    }, 300);
    // $('.head-search-box input').focus();
    $('.head-search-box .input-field label').addClass('active');
    $('.show-search-icons .fa-search').hide();
    $('.search-box').show();
    setTimeout(function () {
        $('.head-search-box').addClass('show-head-search-box');
        $('.close-search-icons').find('.fa-search').addClass('show-search-icon');
    }, 100);

});

$('#join-karnaval').click(function () {
    $('#login').removeClass('fadeOut fadeIn').addClass('fadeOut').css({'display': 'none'});
    $('#sign-up').removeClass('fadeOut fadeIn').css({'display': 'block'}).addClass('fadeIn');
    $('#mobile').focus();
});
$('#sign-karnaval').click(function () {
    $('#sign-up').removeClass('fadeOut fadeIn').addClass('fadeOut').css({'display': 'none'});
    $('#login').removeClass('fadeOut fadeIn').css({'display': 'block'}).addClass('fadeIn');
    $('#email').focus();

});
$('#request-confirm-code').click(function () {
    $('#part-one').removeClass('slideInRight').addClass('slideOutRight');
    $('#part-two').removeClass('slideOutLeft').addClass('slideInLeft');
});
$('.back-to-confirm').click(function () {
    $('#part-one').removeClass('slideOutRight').addClass('slideInRight');
    $('#part-two').removeClass('slideInLeft').addClass('slideOutLeft');
    $('#confirm-code').val('');


});
$('#login-to-karnaval').click(function () {
    // var email = $('#email').val();
    // var password = $('#password').val();
    // var data = {
    //     'email': email,
    //     'password': password
    // };
    // $.ajax({
    //     url: BASE_URL + '/members/login',
    //     method: "POST",
    //     data: data
    // }).then(function (res) {
    //     if (res.success) {
    //         window.localStorage.setItem('token', res.token);
    //         window.location.href = res.url;
    //     }
    //     else {
    //         if (res.password) {
    //             Materialize.toast(res.password[0], 4000, 'red-toast') // 4000 is the duration of the toast
    //         }
    //         Materialize.toast(res.errors[0], 4000, 'red-toast') // 4000 is the duration of the toast
    //         $('#forgotPassword').css({'display': 'block'}).show('slow');
    //     }
    //
    // });
});
$('#signUp-email-mobile').click(function () {
    // var number = $('#mobile').val();
    // user_data = {
    //     'email': number
    // };
    // $.ajax({
    //     url: BASE_URL + '/members/register',
    //     method: "POST",
    //     data: user_data
    // }).then(function (res) {
    //     if (res.success) {
    //         $('#part-one').removeClass('slideInRight').addClass('slideOutRight');
    //         $('#part-two').removeClass('slideOutLeft').addClass('slideInLeft');
    //         $('.back-to-confirm').addClass('disable karnaval-color');
    //         $('#signUp-email-mobile').addClass('disable karnaval-color');
    //         var toast = '';
    //         if (res.column == 'phone') {
    //             toast = 'کد فعالسازی از طریق پیام کوتاه یا تماس صوتی به شماره شما ارسال خواهد شد'
    //         }
    //         else {
    //             toast = 'کد فعالسازی به ایمیل شما ارسال شد';
    //         }
    //         Materialize.toast(toast, 4000, 'karnaval-toast'); // 4000 is the duration of the toast
    //
    //         var number = 120;
    //         Interval = setInterval(function () {
    //             var text = '';
    //             if (res.column == 'phone') {
    //                 text = 'ارسال دوباره در صورت عدم دریافت کد '
    //             }
    //             else {
    //                 text = 'در حال ارسال کد فعالسازی به ایمیل ';
    //             }
    //             $(".back-to-confirm").html(text + (number--));
    //             if (number == 0) {
    //                 clearInterval(Interval);
    //             }
    //         }, 1000);
    //         setTimeout(function () {
    //             $('.back-to-confirm').removeClass('disable karnaval-color').html(' درخواست مجدد کد فعالسازی');
    //             $('#signUp-email-mobile').removeClass('disable karnaval-color');
    //
    //         }, 121000);
    //
    //     }
    //     else {
    //         Materialize.toast(res.errors[0], 4000, 'red-toast') // 4000 is the duration of the toast
    //
    //     }
    //
    // });
});
$('#activate').click(function () {
    // var code = $('#confirm-code').val();
    // user_data.code = code;
    // $.ajax({
    //     url: BASE_URL + '/members/activate',
    //     method: "POST",
    //     data: user_data
    // }).then(function (res) {
    //     if (res.success) {
    //
    //         window.localStorage.setItem('token', res.token);
    //         window.location.href = res.url;
    //     }
    //     else {
    //         Materialize.toast(res.errors[0], 4000, 'red-toast') // 4000 is the duration of the toast
    //
    //     }
    //
    // });
});
$('.dismiss-modal i').click(function () {
    if (Interval) {
        clearInterval(Interval);
    }
    $('.login-form').removeClass('slideInRight slideOutRight');
    $('.back-to-confirm').removeClass('disable karnaval-color').html(' درخواست مجدد کد فعالسازی');
    $('#signUp-email-mobile').removeClass('disable karnaval-color');
});
$('#login-modal input').keypress(function (e) {
    if (e.which === 32)
        return false;
});
$('#mobile').bind('input propertychange', function () {
    var number = $(this).val();
    if ($.isNumeric(number) && !(number.match(/^[A-Za-z]+$/))) {
        if ((!(number.startsWith("0")) || number.length != 11) && (!(number.startsWith("9")) || number.length != 10)) {
            $('#signUp-email-mobile').addClass('disable red-color').html('َشماره موبایل نامعتبر است');
            if (number.startsWith("0") || number.startsWith("9")) {
                $('#signUp-email-mobile').addClass('disable red-color').html('َدرخواست کد فعالسازی');

            }
        }
        else if ((!(number.startsWith("9")) || number.length != 10) && number.length > 1 && !(number.startsWith("09"))) {
            $('#signUp-email-mobile').addClass('disable red-color').html('َشماره موبایل نامعتبر است');
        }
        else if (!((!(number.startsWith("0")) || number.length > 11))) {
            $('#signUp-email-mobile').removeClass('disable red-color').html('درخواست کد فعالسازی');

        }
        else if (!((!(number.startsWith("9")) || number.length > 10) && number.length > 1 )) {
            $('#signUp-email-mobile').removeClass('disable red-color').html('درخواست کد فعالسازی');
        }
    }
    else {
        $('#signUp-email-mobile').removeClass('disable red-color').html('درخواست کد فعالسازی');

    }
});
$('#forgot-password-email').bind('input propertychange', function () {
    var number = $(this).val();
    if ($.isNumeric(number) && !(number.match(/^[A-Za-z]+$/))) {
        if ((!(number.startsWith("0")) || number.length != 11) && (!(number.startsWith("9")) || number.length != 10)) {
            $('#send-email').addClass('disable red-color').html('َشماره موبایل نامعتبر است');
            if (number.startsWith("0") || number.startsWith("9")) {
                $('#signUp-email-mobile').addClass('disable red-color').html('َدرخواست کد فعالسازی');

            }
        }
        else if ((!(number.startsWith("9")) || number.length != 10) && number.length > 1 && !(number.startsWith("09"))) {
            $('#send-email').addClass('disable red-color').html('َشماره موبایل نامعتبر است');
        }
        else if (!((!(number.startsWith("0")) || number.length > 11))) {
            $('#send-email').removeClass('disable red-color').html('درخواست کد فعالسازی');
        }
        else if (!((!(number.startsWith("9")) || number.length > 10) && number.length > 1 )) {
            $('#send-email').removeClass('disable red-color').html('درخواست کد فعالسازی');

        }
    }
    else {
        $('#send-email').removeClass('disable red-color').html('درخواست کد فعالسازی');
    }
});

$('#forgotPassword').click(function () {
    $('#retrieve-password').removeClass('slideOutRight slideOutLeft slideInRight').addClass('slideInLeft');
    $('#login-form').removeClass('slideInRight').addClass('slideOutRight');

});
$('#back-from-forgotpassword').click(function () {
    $('#retrieve-password').removeClass('slideOutRight slideInLeft').addClass('slideOutLeft');
    $('#login-form').removeClass('slideOutRight').addClass('slideInRight');

});
$('#confirm-sms-back').click(function () {
    $('#retrieve-password').removeClass('slideOutRight slideInLeft').addClass('slideInRight');
    $('#confirm-sms').removeClass('slideOutRight slideInRight').addClass('slideOutLeft');
});
$('#send-email').click(function () {
    // var email = $('#forgot-password-email').val();
    // sms_confirm_data = {
    //     'email': email,
    //     'phone': email
    // };
    //
    //
    // if (!(isNaN(email)) && email != '') {
    //     $.ajax({
    //         url: BASE_URL + '/members/password/email',
    //         method: "POST",
    //         data: sms_confirm_data
    //     }).then(function (res) {
    //         if (res.success) {
    //             $('#retrieve-password').removeClass('slideOutLeft slideInLeft').addClass('slideOutRight');
    //             $('#confirm-sms').removeClass('slideOutRight slideOutLeft').addClass('slideInLeft');
    //         }
    //         else {
    //         }
    //     });
    // }
    // else {
    //
    //     $.ajax({
    //         url: BASE_URL + '/members/password/email',
    //         method: "POST",
    //         data: sms_confirm_data
    //     }).then(function (res) {
    //         if (res.success) {
    //             Materialize.toast('ایمیل برای شما ارسال شد', 4000, 'karnaval-toast') // 4000 is the duration of the toast
    //             $('#retrieve-password').removeClass('slideOutRight slideInLeft').addClass('slideOutLeft');
    //             $('#login-form').removeClass('slideOutRight').addClass('slideInRight');
    //         }
    //         else {
    //             Materialize.toast(res.errors[0], 4000, 'red-toast') // 4000 is the duration of the toast
    //
    //         }
    //     });
    // }

});
$('#check_sms_confirm').click(function () {
    // var code = $('#sms_confirmed').val();
    //
    // sms_confirm_data.code = code;
    // $.ajax({
    //     url: BASE_URL + '/members/password/confirm-sms',
    //     method: "POST",
    //     data: sms_confirm_data
    // }).then(function (res) {
    //     if (res.success) {
    //
    //         window.localStorage.setItem('token', res.token);
    //         window.location.href = res.url;
    //     }
    //     else {
    //     }
    //
    // });
});

// $('.google-button').click(function () {
//     var newWindow = window.open(BASE_URL + '/panel/auth/google', 'name', 'height=600,width=450');
//     if (window.focus) {
//         newWindow.focus();
//     }
// });

$('.search-box').click(function () {
    $('.search-box-content').hide('slow').removeClass('slideInUp');
    $('.search-box-body').removeClass('show');
    $('.search-box-body').html('');
    $('#input_search_box').val('');
    $('.head-search-box').removeClass('show-head-search-box');
    $('.close-search-icons').find('.fa-search').removeClass('show-search-icon');
    setTimeout(function () {
        $('.search-box').hide();
        $('.close-search-icons').removeClass('fadeIn');
        $('.input-field').removeClass('fadeIn');
        $('.site-logo-search-box').removeClass('fadeIn');
    }, 200);
    $('.show-search-icons .fa-search').show();

});

$('#input_search_box').keydown(function () {
    $('.search-box-body').addClass('show');

});
$('.hide-for-medium-down').click(function () {
    if ($('.search-input-header').width() > 10) {
        $('.search-input-header').animate({
            width: 0
        });
    } else {
        $('.search-input-header').animate({
            width: 290
        });
    }

});
var tem = 1;
$('.post-tab-li').click(function () {
    tem = 0;
    idValue = $(this).attr('id');
    $('.post-tab-li').removeClass('active');
    $('#' + idValue).addClass('active');
    setTimeout(function () {
        tem = 1;
    }, 2000)
});
function navPostContentP(value, plusValue) {
    $(window).scroll(function () {
        var scrollingElement = document.scrollingElement || document.documentElement;
        if (scrollingElement.scrollTop > value) {
            $('#nav-post-content').addClass('navbar-fixed-top');
            $('#nav-post-content').removeClass(' m-t-10');
        } else {
            $('#nav-post-content').removeClass('navbar-fixed-top');
            $('#nav-post-content').addClass(' m-t-10');
        }
        $('#nav-post-content .post-tab-li').each(function (index, value) {
            var idTarget = $(value).attr('href');
            if (scrollingElement.scrollTop + plusValue > $(idTarget).position().top) {
                if (tem == 1) {
                    var idLi = $(value).attr('id');
                    $('.post-tab-li').removeClass('active');
                    $('#' + idLi).addClass('active');
                }
            }
        })
    });
}
function navPostContentM(value, minusValue) {
    $(window).scroll(function () {
        var scrollingElement = document.scrollingElement || document.documentElement;
        if (scrollingElement.scrollTop > value) {
            $('#nav-post-content').addClass('navbar-fixed-top');
            $('#nav-post-content').removeClass(' m-t-10');
        } else {
            $('#nav-post-content').removeClass('navbar-fixed-top');
            $('#nav-post-content').addClass(' m-t-10');
        }
        $('#nav-post-content .post-tab-li').each(function (index, value) {
            var idTarget = $(value).attr('href');
            if (scrollingElement.scrollTop > $(idTarget).position().top) {
                if (tem == 1) {
                    var idLi = $(value).attr('id');
                    $('.post-tab-li').removeClass('active');
                    $('#' + idLi).addClass('active');
                }
            }
        })
    });
}
$('.section-btn-header li').mouseenter(function () {
    $('.only-li-hover').removeClass('active');
});
$('.section-btn-header').mouseleave(function () {
    $('.only-li-hover').addClass('active');
});
$('.header .ajax-menu-li').mouseenter(function () {
    var type = $(this).attr('data-type');
    var dataId = $(this).attr('data-id');
    var display = $(this).attr('data-display');
    var targetId = $(this).attr('id');
    if ($('.header').find('#' + targetId).find('.mega-sub-menu-li').html().length < 2500) {
        $('.header').find('#' + targetId).find('.mega-sub-menu-li').find('.load-posts-menu-section').show();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': CSRF_TOKEN
            },
            type: "POST",
            url: BASE_URL + '/menu/getPosts',
            data: {type: type, dataId: dataId, display: display},
            success: function (response) {
                if (response.success) {
                    $('.header').find('#' + targetId).find('.mega-sub-menu-li').append(response.view);
                }
                $('.header').find('#' + targetId).find('.mega-sub-menu-li').find('.load-posts-menu-section').hide();

            },
        });
    }

});


var currentSearchAjax = undefined;
var searchTimer = undefined;
$('#input_search_box').keyup(function (e) {
    if ($.trim($('#input_search_box').val()) == '' || $('#input_search_box').val() == null || $('#input_search_box').val() == '' || $('#input_search_box').val() == undefined || $.trim($('#input_search_box').val()).length < 2) {
        defaultMenuPost();
    } else {
        if (searchTimer != undefined)
            clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
            $('.search-box-body').html('');
            $('.search-box-body').html(' <div class="load-posts-menu-section">' +
                ' <p>در حال بارگذاری ...</p>' +
                ' <div class="preloader-wrapper small active">' +
                ' <div class="spinner-layer spinner-green-only">' +
                '<div class="circle-clipper left">' +
                ' <div class="circle"></div>' +
                '   </div>' +
                '  <div class="gap-patch">' +
                '<div class="circle"></div>' +
                '  </div>' +
                '   <div class="circle-clipper right">' +
                ' <div class="circle"></div>' +
                '</div>' +
                '</div>' +
                ' </div>' +
                ' </div>');

            if (currentSearchAjax != undefined)
                currentSearchAjax.abort();
            currentSearchAjax = $.ajax({
                headers: {
                    'X-CSRF-Token': CSRF_TOKEN
                },
                type: "POST",
                url: BASE_URL + '/menu/search/getPosts',
                data: {keywords: $.trim($('#input_search_box').val())},
                success: function (response) {
                    if (response.success) {
                        if (response.count < 1) {
                            $('.header').find('.search-box-body').html('<p class="not-found-search"><i class="fa fa-frown-o"></i><span>متاسفانه موردی یافت نشد</span></p>');
                        } else {
                            $('.header').find('.search-box-body').html(response.view);
                            if ($('.search-page-anchor').length > 0) {
                                var link = $('.search-page-anchor').attr('href');
                                link = link + '/' + $('#input_search_box').val();
                                $('.search-page-anchor').attr('href', link);
                                $('.releated-post-menu-button a').attr('href', link);
                            }
                            $('.tag-section-menu-search-main').height($('.row.main-style-search-content').height() - 65);

                        }
                    }
                },
            });
        }, 1000);
    }

});
$('.header-search').click(function () {
    $('#input_search_box').trigger('keyup');

});
function defaultMenuPost() {
    if ($('#default-search-result').length <= 0) {
        $.ajax({
            headers: {
                'X-CSRF-Token': CSRF_TOKEN
            },
            type: "POST",
            url: BASE_URL + '/menu/search/getPostsDefault',
            success: function (response) {
                if (response.success) {
                    $('.header').find('.search-box-body').html(response.view);

                }
            },
        });
    }

}
// Slide nav
$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);
//Form search mobile
$('form').submit(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active'))
        $(this).removeClass('active');
});

/**
 Show/Hide form inputs
 **/
$('#mobile-search').on('click', function (e) {
    e.preventDefault();
    if ($('.menu-mobile-parent form input').width() > 10) {
        if ($('.menu-mobile-parent input[type="search"]').val() != '' && $('.menu-mobile-parent input[type="search"]').val() != undefined && $('.menu-mobile-parent input[type="search"]').val() != null) {
            window.location.href = BASE_URL + '/search/' + $('.menu-mobile-parent input[type="search"]').val();
        } else {
            $('.menu-mobile-parent form').removeClass('opened');
            $('#mobile-search').removeClass('search-opened');
            $('.section-right-head-mobile .menu-title').show();

        }
    } else {
        $('.menu-mobile-parent form').addClass('opened');
        $('#mobile-search').addClass('search-opened');
        $('.section-right-head-mobile .menu-title').hide();
        $('.menu-mobile-parent input[type="search"]').focus();
    }
});
$('.menu-mobile-parent input[type="search"]').on('focusout', function (e) {
    $('.menu-mobile-parent form').removeClass('opened');
    $('#mobile-search').removeClass('search-opened');
    $('.section-right-head-mobile .menu-title').show();

});
$('.menu-mobile-parent input[type="search"]').keyup(function (e) {
    if (e.keyCode == 13) {
        window.location.href = BASE_URL + '/search/' + $('.menu-mobile-parent input[type="search"]').val();
    }
});

$(document).ready(function () {
    $('.modal').modal();

});

$('.header .tablet-li-menu').on('click', function () {
    $('.header .section-btn-header ul li').removeClass('active-tablet');
    $('.header .section-btn-header ul li').removeClass('only-li-hover');
    $('.header .section-btn-header ul li').removeClass('active');
    $(this).addClass('active-tablet');
});
// $(window).load(function () {
//    $('#parent-block-header-main').find('.loader-block-header').hide();
//    $('#block-header-slider').show();
// });
// $(window).load(function () {
//     if ($('.right.hide-on-med-and-down.section-slidenav').length > 0) {
//         $('.right.hide-on-med-and-down.section-slidenav').removeClass('hidden');
//     }
// });
$('.input-field label').on('click', function () {
    $(this).addClass('active');
    $(this).parent('.input-field textarea').focus();
});
$('.sub-li-menu-first-top-menu-one .ajax-menu-li').mouseenter(function () {
    $(this).addClass('show');
});
$('.sub-li-menu-first-top-menu-one .ajax-menu-li .overly-sub').mouseenter(function () {
    $('.sub-li-menu-first-top-menu-one .ajax-menu-li').removeClass('show');
});
$('.sub-li-menu-first-top-menu-one .ajax-menu-li').mouseleave(function () {
    $(this).removeClass('show');
});
$(document).on('click', '#sub-comment-form .emojionearea-button', function () {
    $('.inside-form-section').each(function (index, value) {
        if ($(value).html() != '') {
            var dataId = $(value).attr('data-id');
            if ($('#sub-emoji-section-' + dataId).html() == '') {
                $('#sub-emoji-section-' + dataId).html($('.emoji-html').html());
                $('#sub-emoji-section-' + dataId).find('.karnaval_emoji.emojionearea').addClass('show');
            } else {
                $('#sub-emoji-section-' + dataId).html('');
                $('#sub-emoji-section-' + dataId).find('.karnaval_emoji.emojionearea').removeClass('show');
            }
        }
    });
});
$(document).on('click', '#sub-question-form .emojionearea-button', function () {
    $('.inside-form-section').each(function (index, value) {
        if ($(value).html() != '') {
            var dataId = $(value).attr('data-id');
            if ($('#sub-emoji-section-' + dataId).html() == '') {
                $('#sub-emoji-section-' + dataId).html($('.emoji-html').html());
                $('#sub-emoji-section-' + dataId).find('.karnaval_emoji.emojionearea').addClass('show');
            } else {
                $('#sub-emoji-section-' + dataId).html('');
                $('#sub-emoji-section-' + dataId).find('.karnaval_emoji.emojionearea').removeClass('show');
            }
        }
    });
});

function str_random(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(document).ready(function () {
    var end = (1514969095 + (15 * 24 * 60 * 60)) * 1000;
    var now = Date.now();

    var clock = $('.user-panel-clock').FlipClock((end - now) / 1000, {
        clockFace: 'DailyCounter',
        countdown: true
    });
    $('.user-panel-clock').find('.seconds').nextAll().hide();
    $('.user-panel-clock').find('.seconds').hide();
    $('.user-panel-clock').find('.minutes .flip-clock-label').text('دقیقه');
    $('.user-panel-clock').find('.hours .flip-clock-label').text('ساعت');
    $('.user-panel-clock').find('.days .flip-clock-label').text('روز');
    $('.user-panel-clock-container').addClass('after-init');
    $('.user-panel-clock-container').tooltipster({
        theme: 'clock-tooltip',
        content: '?'
    });
});

isArray = function (a) {
    return (!!a) && (a.constructor === Array);
};
isObject = function (a) {
    return (!!a) && (a.constructor === Object);
};


$(document).on('click', '.sign-up, #sign-li', function () {
    $('#modal-welcome').modal('close');
    $('#join-karnaval').trigger('click');
    $('#login-modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            $('#mobile').focus();
        },
        complete: function () {
            $('#part-one').removeClass('slideInRight slideOutRight');
            $('#part-two').removeClass('slideOutLeft slideInLeft');
            $(':input').val('');
        } // Callback for Modal close
    }).modal('open');
});
$(document).on('click', '.login, #login-li', function () {
    $('#sign-karnaval').trigger('click');
    $('#login-modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            $('#email').focus();
        },
        complete: function () {
            $(':input').val('');
            $('.back-to-confirm').removeClass('disable karnaval-color').html(' درخواست مجدد کد فعالسازی');
            $('#signUp-email-mobile').removeClass('disable karnaval-color');
        } // Callback for Modal close
    }).modal('open');
});

$(document).on('click', '.google-button', function () {
    // var win = window.open(BASE_URL + '/members/auth/google', "google-oauth", "width=500,height=500");
    // var pollTimer = window.setInterval(function () {
    //     if (win.closed !== false) { // !== is required for compatibility with Opera
    //         window.clearInterval(pollTimer);
    //         var url = window.localStorage.getItem('member-url');
    //         if (url != null && url.indexOf('/members/') >= 0) {
    //             window.localStorage.removeItem('member-url');
    //             window.location.href = url;
    //         }
    //     }
    // }, 100);

});

$(document).on('click', '.ads-increment', function () {
    var dataUrl = $(this).attr('data-ads-url');
    adsIncrement(dataUrl);

});

function adsIncrement(url) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': CSRF_TOKEN
        },
        type: "POST",
        url: BASE_URL + '/ads/increment',
        data: {url: url},
    });
}

var maps = [];

mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js');

$.each($('.mapbox'), function (index, elem) {
    var lat = $(this).attr('data-lat');
    var lng = $(this).attr('data-lng');
    var zoom = $(this).attr('data-zoom');
    mapBoxInit(lat, lng, zoom, elem);
});

function mapBoxInit(lat, lng, zoom, elem) {
    zoom = parseFloat(zoom);
    zoom = zoom == undefined || Number.isNaN(zoom) || zoom == '' ? 15 : zoom;
    var center = [parseFloat(lat), parseFloat(lng)];

    if (Number.isNaN(center[0]) || Number.isNaN(center[1])) {
        return;
    }

    var map = L.map(elem, {
        scrollWheelZoom: false,
    }).setView(center, zoom);
    map.attributionControl.setPrefix('Licensed by &copy; <a href="https://www.karnaval.ir" target="_blank">karnaval.ir</a>');

    const layer = L.mapboxGL({
        accessToken: 'not-needed',
        style: 'https://maps.tilehosting.com/c/53c4aaff-ede4-4e9c-937a-26e6cdca87c9/styles/karnaval-01/style.json?key=zPTOrASbbFjKo06NThg0',
        transformRequest: function (url, resourceType) {
            if (['Tile', 'Glyphs'].includes(resourceType)) {
                return {
                    url: url.replace('https://maps.tilehosting.com', 'https://maptile.karnaval.ir'),
                }
            }
        }
    });
    map.addLayer(layer);

    var myIcon = L.icon({
        iconUrl: BASE_URL + '/images/icons/pin.png',
        iconAnchor: [14, 40],
    });

    L.marker(center, {
        icon: myIcon,
    }).addTo(map);

    elem.addEventListener("resize", function () {
        console.log("ASD");
    });

    maps.push(map);

    return map;
}

function invalidateSizeMaps() {
    maps.map(map => {
        map.invalidateSize();
    })
}