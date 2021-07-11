$(document).ready(function(){
    var win_h = $(window).height();
    $(".page").each(function(index){
        $(this).attr("data-index", win_h*index);
    });
    $(".page").on("mousewheel DOMMouseScroll", function(e){
        var idx = $(this).index();
        var pagePos = parseInt($(this).attr("data-index"));

        if(idx>=1) { //스크롤시 두 번째 페이지를 스크롤했을 때
            $(".hd").addClass("on"); 
            $(".to_top").addClass("on");
        } else {
            $(".hd").removeClass("on");
            $(".to_top").removeClass("on");
        }
        if(e.originalEvent.wheelDelta >= 0) { //위로 스크롤시
            $("html, body").stop().animate({scrollTop:pagePos - win_h});
            $(".left_quick button").eq(idx-1).addClass("on");
            $(".left_quick button").eq(idx-1).siblings().removeClass("on");
            return false;
        } else if(e.originalEvent.wheelDelta < 0) {  //아래로 스크롤
            $("html, body").stop().animate({scrollTop:pagePos + win_h});
            $(".left_quick button").eq(idx+1).addClass("on");
            $(".left_quick button").eq(idx+1).siblings().removeClass("on");
            return false;
        }
    });
    $(".left_quick button").click(function(){ //퀵 메뉴를 클릭시 해당 화면으로
        var idx = $(this).index();
        $("html, body").stop().animate({scrollTop:win_h*idx});
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });

    $(".to_top button").click(function(){ //맨 위로
        $("html, body").stop().animate({scrollTop:"0px"});
        $(".left_quick button").eq(0).addClass("on");
        $(".left_quick button").eq(0).siblings().removeClass("on");
    });
});    