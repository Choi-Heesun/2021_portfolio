$(document).ready(function () {
    /*fixMenu*/

    function fixMenu() {

        var i = 0;

        $("article").mouseenter(function () {
            i = ($(this).index()) + 1;
            $(".fix_menu > li").removeClass("fix_menu_style")
            $(".fix_menu > li:nth-child" + "(" + i + ")").addClass("fix_menu_style");

        });

        $(".fix_menu > li").click(function () {
            $(this).addClass("fix_menu_style");
            $(".fix_menu > li").not(this).removeClass("fix_menu_style");
        });

    }


    function scrollBtn() {
        $(".scroll_btn").hide();

        setTimeout(function () {
            $(".scroll_btn").fadeIn();
        }, 1500)

        $(".scroll_btn").click(function () {
            location.href = '#page1'
        });
    }

     /*titlepage*/
     $(".title_nav > li:first-child").mouseover(function () {
        $(this).children("ul").show();
    }).mouseout(function () {
        $(this).children("ul").hide();
    });

    /*website*/
    $(".pofol_img").mouseover(function () {
        $(".pofol_img > a > img").stop().animate({marginTop: -7500 }, 15000);
    }).mouseout(function () {
        $(".pofol_img > a > img").stop().animate({marginTop: 0 });
    });

    /*phone*/
    $(".phone").mouseover(function(){
        $(".phone > a > img").stop().animate({marginTop:-7500},15000)
    }).mouseout(function () {
        $(".phone > a > img").stop().animate({marginTop: 0 });
    });

 



    fixMenu();
    scrollBtn();

});