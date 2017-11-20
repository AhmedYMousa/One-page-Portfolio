$(document).ready(function () {
    // $("body").css("animation", "bodyAnimation ease-in-out 1s 1");
    $("#navbar").on("click", "li >a", function () {
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000);
        console.log($(this.hash).offset().top);
    });
});


/*       <div id="info">
            <div class="grid">
                <!-- <div class="col-4">
                    <div class="info-wrapper">
                        <div class="info-icon">
                            <div class="icon">
                                <i class="fa fa-phone"></i>
                            </div>
                        </div>
                        <div class="info-txt">
                            <p>
                                <b>Phone</b>
                            </p>
                            <p>+1 234 456-789</p>
                            <p>+123-456-7890</p>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="col-4">
                    <div class="info-wrapper">
                        <div class="info-icon">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                        </div>
                        <div class="info-txt">
                            <p>
                                <b>Address</b>
                            </p>
                            <p>Liutte 207 New York</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="info-wrapper">
                        <div class="info-icon">
                            <div class="icon">
                                <i class="fa fa-cogs"></i>
                            </div>
                        </div>
                        <div class="info-txt">
                            <p>
                                <b>Email Address</b>
                            </p>
                            <p>johnsmith@company.com</p>
                            <p>youoffice@company.com</p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div> */