$(function(){

    var hgt = $(window).height();
    $('.wrap section').height(hgt);

    $('.gnb li').click(function(){
        var a = $(this).index();
        $('.gnb li').removeClass('on');
        $('.gnb li').eq(a).addClass('on');
    });

    $('section').mousewheel(function(event, delta){
        event.preventDefault();
        if(delta > 0){
            var prev = $(this).prev().offset().top;
            $('html, body').animate({'scrollTop' : prev}, 1400, 'easeOutBounce');
        }
        else if(delta < 0){
            var next = $(this).next().offset().top;
            $('html, body').animate({'scrollTop' : next}, 1400, 'easeOutBounce');
        }
    })
})