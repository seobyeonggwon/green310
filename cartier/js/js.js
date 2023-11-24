$(function(){
    // article에 마우스가 들어갔을때, 내가 width값(가로값)이 자연스럽게 늘어나라
    // article에 마우스가 들어갔을때, article 나의 자손인 비디오가 서서히 보여라
    $('article').mouseenter(function(){
        $(this).stop().animate({'width' : '35%'}, 1000, function(){
            $(this).find('h3').stop().animate({'right' : '10px'}, 400);
            $(this).find('p').stop().animate({'right' : '10px'}, 800);
        })
        $(this).find('video').stop().animate({'opacity' : '0.9'}, 1300);
    })
    $('article').mouseleave(function(){
        $(this).stop().animate({'width' : '12%'}, 500);
        $(this).find('video').stop().animate({'opacity' : '0'}, 2000);

        $(this).find('h3').stop().animate({'right' : '-310px'}, 200);
        $(this).find('p').stop().animate({'right' : '-310px'}, 200);
    })
})