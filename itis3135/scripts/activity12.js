//Source: https://bxslider.com/options/
$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        //1 slide dsipalyed.
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        //start at a random spot
        randomStart: true,
        //move 1 slide at a time
        moveSlides: 1,
        //show captions
        captions: true,
        //time between swich
        pause: 3000,
        pager: true,
        pagerSelector: "#id_pager",
        pagerType: "short"
    });

   

        
});