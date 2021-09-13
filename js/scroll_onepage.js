window.addEventListener("wheel", function (e) {
    e.preventDefault(); //이벤트를 취소한다. 여기서는 자동으로 부여되는 wheel 이벤트 삭제
}, {
    passive: false
});   //passive = false 여야 preventDefault를 호출할수 있음.

var $html = $("html")
var page = 1;
var lastPage = $("article").length;
$html.animate({ scrollTop: 0 }, 5);

$(window).on("wheel", function (e) {

    if ($html.is(":animated")) return;

    if (e.originalEvent.deltaY > 0) {

        if (page == lastPage) return;
        page++;

    } else if (e.originalEvent.deltaY < 0) {

        if (page == 1) return;
        page--;

    }

    var posTop = (page - 1) * $(window).height();
    $html.animate({ scrollTop: posTop });

});



