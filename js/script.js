$(window).on("load",function(){
    $("#overlay").css({"display":"none"});
    $(document).ready(function () {
        $("body").css("animation", "bodyAnimation ease-in-out 1s 1");
        $("#navbar").on("click", "li > a", function (event) {
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 70}, 1000);
                $(".active").removeClass("active");
            $(this).addClass("active");
        });
        $("a.send").click(function(event){
           var name= $("#contact-name").val();
           var email= $("#contact-email").val();
           var subject= $("#contact-subject").val();
           var message= $("#contact-message").val();
           $(this).attr({"href":"mailto:john@example.com?subject="+subject+"&body="+message+"&from="+email});
        });
    
    });
});




