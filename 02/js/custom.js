
$(function(){

    AOS.init();


        $(".header .gnb_wrap .gnb > li").mouseover(function() { 
            // $(this).children("ul").css("visibility", "visible").stop().animate({opacity:1},300); 
            $(this).children("ul").addClass('on');
        })
        $(".header .gnb_wrap .gnb > li").mouseleave(function() { 
            // $(this).children("ul").css("visibility", "hidden").stop().animate({opacity:0})
            $(this).children("ul").removeClass('on');
        })
        $(".header .sub_gnb > li").mouseover(function() { 
            // $(this).children("ul").css("visibility", "visible").stop().animate({opacity:1},300); 
            $(this).children("ul").addClass('on');
        })
        $(".header .sub_gnb > li").mouseleave(function() { 
            // $(this).children("ul").css("visibility", "hidden").stop().animate({opacity:0})
            $(this).children("ul").removeClass('on');
        })

        $(".foot .btm_area .inner .family > li > a").click(function() { 

            var more = $('.foot .btm_area .inner .family ul').css('visibility')
            if(more == 'hidden'){
                $('.foot .btm_area .inner .family ul').css("visibility", "visible")
            }
            else{
                $('.foot .btm_area .inner .family ul').css("visibility", "hidden")
            }

        })


        var swiper = new Swiper('.project_list .swiper-container', {
        slidesPerView: '3',
        spaceBetween: 30,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
            },
        })


            $('.project_nav li').click(function(){

                idx = $(this).index()+1;

                $('.project_nav li').removeClass('on');
                $(this).addClass('on');

                $('.project_list > div').removeClass('on');
                $('#projectCon'+idx).addClass('on');
            })


            var swiper = new Swiper('.main_vis .swiper-container', {
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            })

        $('.main_vis .open').click(function(){
            $('.main_vis .side_menu').animate({left:0},500);
        })
        $('.main_vis .close').click(function(){
            $('.main_vis .side_menu').animate({left:'-100%'},500);
        })
})