$(document).ready(function () {
    $("#navbar").on("click", "li >a", function () {
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
