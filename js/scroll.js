$(document).ready(function(){
    $(".burger-nav").on("click",function(){
        $("nav #menu").toggleClass("open");
    });
});

$(document).ready(function(){
    $("#down-link").on("click",function(){
        var h = $(window).height();
     //   window.scrolldelay(800);
        window.scrollBy(0,h);
    });
});