$(function(){

    $(window).scroll(function(){
        let sc = $(document).scrollTop();

        $('.tt').text(sc);

        $('.window').css({top: -0.5*sc + 0 ,})
    });


})
