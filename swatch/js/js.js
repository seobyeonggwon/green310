$(function(){
    // 윈도우의 높이값을 찾아 section에 높이값을 대입
    var wht = $(window).height();
    $('.wrap section').height(wht);
    // 화면의 크기가 바뀌었을때, 윈도우의 높이값을 찾아 section에 높이값을 대입
    $(window).resize(function(){
        var wht = $(window).height();
        $('.wrap section').height(wht);
    });
    // gnb의 li를 클릭했을때, li의 순번을 찾아라. 클릭한 나 자신의 클래스 on값을 더해라
    $('.gnb li').click(function(){
        var wht = $(window).height();
        var i = $(this).index();
        console.log(i);
        $('.gnb li').removeClass('on');
        $(this).addClass('on');
        $('html, body').animate({'scrollTop' : wht * i}, 1400, 'easeOutBounce');
    });
    // section 위에서 마우스 휠을 했을때, 올리면 바뀌고 내리면 바뀌어라를 구현
    $('section').mousewheel(function(event, delta){
        event.preventDefault();
        // 마우스를 올렸을때
        if(delta > 0){
            var prev = $(this).prev().offset().top; // 지금 나의 이전요소의 높이의 위치값을 찾아라
            $('html, body').stop().animate({'scrollTop' : prev}, 1400, 'easeOutBounce');
        }
        // 마우스를 내렸을때
        else if(delta < 0){
            var next = $(this).next().offset().top; // 지금 나의 이전요소의 높이의 위치값을 찾아라
            $('html, body').stop().animate({'scrollTop' : next}, 1400, 'easeOutBounce');
        }       
    });
    // 스크롤했을때, 스크롤의 위치값을 찾고 일정 높이였을때 li의 on값을 더해라
    $(window).scroll(function(){
        var wht = $(window).height();
        var sc = $(this).scrollTop();
        $('h1').text(sc);
        // if(sc >= 0 && sc < wht * 1){
        //     $('.gnb li').removeClass('on');
        //     $('.gnb li').eq(0).addClass('on');
        // }
        // else if(sc >= wht * 1 && sc < wht * 2){
        //     $('.gnb li').removeClass('on');
        //     $('.gnb li').eq(1).addClass('on');
        // }
        // else if(sc >= wht * 2 && sc < wht * 3){
        //     $('.gnb li').removeClass('on');
        //     $('.gnb li').eq(2).addClass('on');
        // }
        // else if(sc >= wht * 2 && sc < wht * 4){
        //     $('.gnb li').removeClass('on');
        //     $('.gnb li').eq(3).addClass('on');
        // }

        // 반복문을 활용한 스크립트 축약
        for(var a = 0; a < 5; a++){
            if(sc >= wht * a && sc < wht * (a+1)){
                $('.gnb li').removeClass('on');
                $('.gnb li').eq(a).addClass('on');
            }
        }
    });
    // section에서 마우스가 움직일때, 이미지가 움직여라
    $('section').mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;
        var cx = e.clientX;
        var cy = e.clientY;
        // 임시설정
        $('.gnb li').eq(0).text(x);
        $('.gnb li').eq(1).text(y);
        $('.gnb li').eq(2).text(cx);
        $('.gnb li').eq(3).text(cy);

        $('.i11').css({
            'right': 20 + (cx / 20),
            'bottom': 20 + (cy / 20)
        })
        $('.i12').css({
            'right': 130 + (cx / 20),
            'bottom': -40 + (cy / 20)
        })
        $('.i13').css({
            'right': 60 + (cx / 20),
            'bottom': 180 + (cy / 20)
        })
        $('.i21').css({
            'right': -180 + (cx / 20),
            'bottom': -480 + (cy / 20)
        })
        $('.i22').css({
            'right': 130 + (cx / 20),
            'bottom': -40 + (cy / 20)
        })
        $('.i31').css({
            'right': 180 + (cx / 20),
            'bottom': 30 + (cy / 20)
        })
        $('.i32').css({
            'right': 110 + (cx / 20),
            'bottom': -270 + (cy / 20)
        })
        $('.i33').css({
            'right': -70 + (cx / 20),
            'bottom': -130 + (cy / 20)
        })
        $('.i41').css({
            'right': -20 + (cx / 20),
            'bottom': -120 + (cy / 20)
        })
        $('.i42').css({
            'right': -0 + (cx / 20),
            'bottom': -180 + (cy / 20)
        })
        /*
        
        /* 첫번째박스 이미지 
        .i11 {
            right: 20px;
            bottom: 20px;
        }
        .i12 {
            right: 130px;
            bottom: -40px;
        }
        .i13 {
            right: 60px;
            top: 180px;
        }

        /* 두번째박스 이미지 
        .i21 {
            right: -180px;
            bottom: -480px;
        }
        .i22 {
            right: 130px;
            bottom: -40px;
        }

        /* 세번째박스 이미지 
        .i31 {
            right: 180px;
            bottom: 30px;
        }
        .i32 {
            right: 110px;
            bottom: -270px;
        }
        .i33 {
            right: -70px;
            top: -130px;
        }

        /* 네번째박스 이미지 
        .i41 {
            right: 20px;
            bottom: -120px;
        }
        .i42 {
            right: 0;
            bottom: -180px;
        }

        */
    })
})