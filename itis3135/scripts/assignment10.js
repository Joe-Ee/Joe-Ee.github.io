$(document).ready(function() {


    
    $("#image_list a").each(function(){
        //get the image 
        let picture = $(this).attr("href")
        //get its caption
        let caption = $(this).attr("title")
        console.log(picture)
       console.log(caption)

    

        //on the click event for the image thubnails
    $(this).click(function(event) {
        //fadeout with duration of 10000 then the function next funtion will run
        $("#caption, #image").fadeOut(1000, 
            //callback function to fade out the 
            function(){
                //change the img src to the one from the picture that was clicked on
            $("#image").attr("src", picture);
           
            console.log(caption)
            //fade in the image then do a callback function to fade in the caption
            $("#image").fadeIn(1000, function(){
                $("#caption").text(caption)
                $("#caption").fadeIn(1000)
            });
        });

        //stop the link from loading the picture fully 
        event.preventDefault();
        
    });
});

    $("li:first-child a").focus
});
    // set up the event handlers for each link

            // get the image URL and caption for each image and animate the caption

        // cancel the default action of each link


// move the focus to the first link

