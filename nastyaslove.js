$('.ava-side').click(function () {
    pocikAudio = document.getElementById('bubu');
    if($(this).hasClass("rotate")){
        pocikAudio.pause();
        $(this).removeClass('rotate');
        $(this).removeClass('darkness');
        $(".hover-on-shadow-dark").addClass("hover-on-shadow");
        $(".hover-on-shadow-dark").removeClass("hover-on-shadow-dark");
        $(".links-hover-dark").addClass("links-hover");
        $(".links-hover-dark").removeClass("links-hover-dark");
        $("#img").attr("src", "https://telega.one/i/userpic/320/ggrnaa.jpg")
        $(".bg").attr("src", "https://i.imgur.com/bztzT7i.jpg");
        $(".bg-ph").attr("src", "https://i.imgur.com/MPVmQyE.png");
    }
    else{
        pocikAudio.play();
        $(this).addClass('darkness');
        $(this).addClass('rotate');
        $(".hover-on-shadow").addClass("hover-on-shadow-dark");
        $(".hover-on-shadow").removeClass("hover-on-shadow");
        $(".links-hover").addClass("links-hover-dark");
        $(".links-hover").removeClass("links-hover");
        $("#img").attr("src", "https://i.imgur.com/yCtdkEP.png")
        $(".bg").attr("src","https://i.pinimg.com/originals/07/5e/b7/075eb74eca4cb75163d83e77b743f998.gif");
        $(".bg-ph").attr("src", "https://media.giphy.com/media/Jlg7O8oRfra3XgmjFG/giphy.gif")
    }
});




