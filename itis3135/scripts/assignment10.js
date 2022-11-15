$(document).ready(function() {


    
    $("#image_list a").each(function(){
        //get the image 
        let picture = $(this).attr("href")
        //get its caption
        let caption = $(this).attr("title")
        console.log(picture)
       console.log(caption)

    

        //on the click event for the image thubnails
    $(this).click(function(evt) {
        $("#caption, #image").fadeOut(1000, 
            //callback function to fade out the 
            function(){
                //change the img src to the one from the picture that was clicked on
            $("#image").attr("src", picture);
            $("#caption").text(caption);
            console.log(caption)
            $("#caption, #image").fadeIn(1000);
        });
        //stop the link from loading the picture fully 
        evt.preventDefault();
        
    });
});
    $("li:first-child a").focus
});
    // set up the event handlers for each link

            // get the image URL and caption for each image and animate the caption

        // cancel the default action of each link


// move the focus to the first link

 // end ready