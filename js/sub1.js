$(document).ready(function () {

cbtn();
    // 좌우버튼 호버
    $('.next').hover(function () {
        var next_name=$('.slide li').eq(1).children('h2').text();
        $(this).children('span').text(next_name +' >').stop().fadeIn('slow');
        $(this).children('span').stop().animate({'width':'180px'},'slow')
    },function(){
        $(this).stop().animate({'width':'50px'},'slow')
        $(this).children('span').stop().fadeOut();
    })


    $('.prev').hover(function () {
        var prev_name=$('.slide li').eq(2).children('h2').text();
        $(this).children('span').text(prev_name).fadeIn('slow');
        $(this).stop().animate({'width':'180px'},'slow')
    },function(){
        $(this).stop().animate({'width':'50px'},'slow')
        $(this).children('span').stop().fadeOut();
    })


    // 좌우버튼 클릭
    $('.next').click(function () {
        $('.slide').children('li').first().appendTo('.slide');
        cbtn();
        
    });
    $('.prev').click(function () {
        $('.slide').children('li').last().prependTo('.slide');
        cbtn();
    });



    // 컬러버튼 
    function cbtn(){
    $('.color_btn button').eq(0).click(function(){
        $(this).parent().siblings('.product').children('img').eq(0).show()
        .siblings().hide();
    })
    $('.color_btn button').eq(1).click(function(){
        $(this).parent().siblings('.product').children('img').eq(1).show()
        .siblings().hide();
    })
    $('.color_btn button').eq(2).click(function(){
        $(this).parent().siblings('.product').children('img').eq(2).show()
        .siblings().hide();
    });

        // for (var i = 0; i<$('.color_btn>button').length; i++) {
        // $('.color_btn>button').eq(i).click(function () {
        //     $(this).parent().siblings('.product').children('img').eq(i).show()
        //         .siblings().hide();
        // });
    // }

}
    

    // 닙모양 버튼
    $('.nib_open').click(function () {
        $('.nib').fadeIn();
    })
    $('.nib_close').click(function () {
        $('.nib').fadeOut();
    })


    // 하단 다른 제품 메뉴
    $('.more h4').click(function () {
        $(this).css({ 'background': '#c40f39', 'color': 'white' })
        $(this).siblings('ul').show();

        $(this).parent().siblings().children('h4').css({ 'background': 'none', 'color': '#222' })
        $(this).parent().siblings().children('ul').hide();
    })





})