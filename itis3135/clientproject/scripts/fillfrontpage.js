$(document).ready(function(){
    let i = "id"
    
    $.getJSON("json/home.json", function(data){ 
        // 
        
        $.each(data, function() { 
            
            $.each(this, function(key, item) { 
                if(item.title == "History of Javascript"){
                    id = "#html"
                }else{
                    id = "#js"
                }
                $(id).append(
                    "<h2>" + item.title + "</h2>" +
                    "<figure>" + 
                    "<img src= " + item.picture  + ">" + 
                        "<figcaption>" + item.caption + "</figcaption>" +
                    "</figure>" +
                    "<p>" + item.description1 + "</p>" +
                    "<p>" + item.description2 + "</p>" + "<br>"
                )
            }); 
        });  
    }); 

});