$(document).ready(function () {
    $("body").css("animation", "bodyAnimation ease-in-out 1s 1");
    $("#navbar").on("click", "li >a", function () {
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});