$(function() {
    $('.load').click(function () {
        $('.mask').fadeIn();
    })
    $('#close').click(function() {
        $('.mask').fadeOut();
    })

    $("#back").click(function() {
        $('html, body').animate({//当点击按钮的时候采用动画的方式回到顶部
            scrollTop:0
        }, 800);
    })

    $(window).on('scroll', function() {
        if($(window).scrollTop() > $(window).height()) {//如果滚动的高度大于当前屏幕高度则显示按钮
            $("#back").fadeIn();
        } else {
            $("#back").fadeOut();
        }
    })

    $(window).trigger('scroll');
})