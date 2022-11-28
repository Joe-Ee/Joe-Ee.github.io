
//when the document is opened
$(document).ready(function(){ 
    //get json file 
    $.getJSON("team.json", function(data){ 
        //go through it
        $.each(data, function() { 
            //append informaiton to the div with the ID of  "#team"
            $.each(this, function(key, item) { 
                
                $("#team").append( 
                    "<h3>" + item.name + "</h3>" +  
                    "<p>" + item.title + "</p>" +  
                    "<p>" +item.bio + "</p>" 
                ); 
            }); 
        });  
    }); 
}); 

