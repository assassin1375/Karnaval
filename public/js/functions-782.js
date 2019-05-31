function addSpinner(target, text) {
    text = text == undefined ? '' : '<span style="position: relative;top:-10px;margin-left:5px;">' + text + '</span>';
    $(target).html(text + '<div class="preloader-wrapper small active" style="width: 30px;height:30px;margin-top: 3px">' +
        ' <div class="spinner-layer spinner-white-only">' +
        '  <div class="circle-clipper left">' +
        '  <div class="circle"></div>' +
        '  </div>' +
        ' <div class="gap-patch">' +
        '  <div class="circle"></div>' +
        '   </div>' +
        '  <div class="circle-clipper right">' +
        '   <div class="circle"></div>' +
        ' </div>' +
        '</div>' +
        '</div>');
}
function removeSpinner(target, html) {
    $(target).html(html);
}
function addDisable(target) {
    $(target).attr('disabled', true);
}
function removeDisable(target) {
    $(target).removeAttr('disabled');
}
$('.app-modal').click(function () {
    console.log($(this).attr('href'));
    $($(this).attr('href')).modal();
});
function addEffectShake(target) {
    $(target).addClass('sake-effect');
}
function removeEffectShake(target) {
    $(target).removeClass('sake-effect');
}
function showLoadMore() {
    $('.post-loader-wrapper').slideDown();
}
function hideLoadMore() {
    $('.post-loader-wrapper').hide();
}
function tooltipped() {
    $('.tooltipped').tooltip({delay: 50});
}
function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
}
function secondsTimeSpanToMS(s) {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
}
function paginate(element, callback) {
    $(document).on('click', element + ' li', function (e) {
        if (!$(this).hasClass('disabled')) {
            $(element).find('li').removeClass('active');
            if (!$(this).hasClass('next-page') && !$(this).hasClass('prev-page'))
                $(this).addClass('active');
            callback($(this).attr('data-page'));
        }
    });
}

function callKnob() {
    $(".rate-avg-karnaval").knob({
        "fgColor": "#35b995",
        "skin": "tron",
        'width': 40,
        'heigth': 40,
        'step': .5,
        'max': 10
    });
    $(".rate-avg-users").knob({
        "fgColor": "#4d6faa",
        "skin": "tron",
        'width': 40,
        'heigth': 40,
        'step': .5,
        'max': 10
    });
}
function showModal(target) {
    $(target).modal('open');
}
function hideModal(target) {
    $(target).modal('close');
}
$(document).ready(function () {
    persianNumber();
});
function persianNumber() {
    persian = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};
    function traverse(el) {
        if (el.nodeName != "SCRIPT" && !$(el).hasClass('no-persian') && $(el).attr('lang') != 'en') {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
    }

    traverse(document.body);
}
function englishNumber(input) {
    var numbers = {
        '۰': 0,
        '۱': 1,
        '۲': 2,
        '۳': 3,
        '۴': 4,
        '۵': 5,
        '۶': 6,
        '۷': 7,
        '۸': 8,
        '۹': 9
    };

    var output = [];
    for (var i = 0; i < input.length; ++i) {
        if (numbers.hasOwnProperty(input[i])) {
            output.push(numbers[input[i]]);
        } else {
            output.push(input[i]);
        }
    }
    return output.join('');
}
String.prototype.wordLength = function () {
    if (this == "")
        return 0;
    var temp = this.split(" ");
    var count = temp.length;
    $(temp).each(function (index, value) {
        count += value.split('-').length - 1;
    });
    return count;
};

function resizeInfoWindows(options, container) {
    var infoWindwos = container == undefined ? $('.gm-style-iw') : $(container).find('.gm-style-iw');
    var top = options == undefined || options.top == undefined ? 30 : options.top;
    var padding = options == undefined || options.padding == undefined ? 10 : options.padding;
    $.each(infoWindwos, function (index, value) {
        var width = $(value).find('>div').width();
        var height = $(value).find('>div').height();
        var box = $(value).prev();
        var shadow = box.find('> div:nth-child(2)');
        var whiteBox = box.find('> div:nth-child(4)');
        var close = $(value).next();

        var diff = {
            h: Math.abs(parseInt(shadow.css('height')) - height) / 2,
            w: Math.abs(parseInt(shadow.css('width')) - width) / 2
        };
        shadow.css({
            top: 15 + diff.h - (padding / 2) - 1,
            left: diff.w - (padding / 2) - 1,
            width: width + padding + 2,
            height: height + padding + 2
        });
        var diff = {
            h: Math.abs(parseInt(whiteBox.css('height')) - height) / 2,
            w: Math.abs(parseInt(whiteBox.css('width')) - width) / 2
        };
        whiteBox.css({
            top: 15 + diff.h - (padding / 2),
            left: diff.w - (padding / 2),
            width: width + padding,
            height: height + padding
        });
        close.css({
            top: 20 + diff.h - (padding / 2),
            left: 5 + diff.w - (padding / 2),
            'z-index': 1001
        });
        $(value).css({
            top: 15 + diff.h
        });
    });
}

var rad = function (x) {
    return x * Math.PI / 180;
};

var getDistanceBetween = function (p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat() - p1.lat());
    var dLong = rad(p2.lng() - p1.lng());
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};