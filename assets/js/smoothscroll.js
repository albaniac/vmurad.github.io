var $root = $('html, body');

$('a[href^="#"]:not([href=#]):not([href=#firstspec]):not([href=#secondspec]):not([href=#thirdspec])').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 35
    }, 1000);

    return false;
});