$(document).ready(function(){

    $.getJSON("facultyList.json", function(data){ 
        // 
        
        $.each(data, function() { 
            //append informaiton to the  main block
            $.each(this, function(key, item) { 
                
                $("main").append( 
                    "<h2>" + item.full_name + "</h2>" + 
                    '<img src = "' + item.image + '" alt = "proffessor image " img>' + 
                    
                    "<h3>" + item.first_name + "</h3>" +  
                     
                    "<h4>" +item.department + "</h4>" +  
                    "<p>" + item.bio + "</p>" 
                ); 
            }); 
        });  
    }); 

});


