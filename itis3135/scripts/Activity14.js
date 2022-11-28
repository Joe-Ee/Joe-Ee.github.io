$(document).ready(function() {
    
    $( "#chua" ).click(function() {
    $.getJSON("json_files/chua.json", function(data){ 
        //remove the current elements in main so that the new one will work
        $("#main").html("");
        $.each(data, function() { 
            //append informaiton to the  main block
            $.each(this, function(key, item) { 
                $("main").append( 
                    "<h2>" + item.title + "</h2>" + 
                    "<h2>" + item.month + "</h2>" +  
                     
                    "<h3>" +item.speaker + "</h3>" +  
                    "<p>" + item.text + "</p>" 
                ); 
            }); 
        });  
    }); 
});
$( "#toobin" ).click(function() {
    //remove the current elements in main
    $("#main").html("");
    $.getJSON("json_files/toobin.json", function(data){ 
        // 
        
        $.each(data, function() { 
            //append informaiton to the  main block
            $.each(this, function(key, item) { 
                
                $("main").append( 
                    "<h1>" + item.title + "</h1>" + 
                    "<h2>" + item.month + "</h2>" +  
                     
                    "<h3>" +item.speaker + "</h3>" +  
                    "<p>" + item.text + "</p>" 
                ); 
            }); 
        });  
    }); 
});
$( "#sampson" ).click(function() {
    //remove the current elemets in main
    $("#main").html("");
    $.getJSON("json_files/sampson.json", function(data){ 
        // 
        
        $.each(data, function() { 
            //append informaiton to the  main block
            $.each(this, function(key, item) { 
                
                $("main").append( 
                    "<h1>" + item.title + "</h1>" + 
                    "<h2>" + item.month + "</h2>" +  
                     
                    "<h3>" +item.speaker + "</h3>" +  
                    "<p>" + item.text + "</p>" 
                ); 
            }); 
        });  
    }); 
});
$( "#sorkin" ).click(function() {
    //remove hte current elements in main block
    $("#main").html("");
    $.getJSON("json_files/sorkin.json", function(data){ 
        // 
        
        $.each(data, function() { 
            //append informaiton to the  main block
            $.each(this, function(key, item) { 
                
                $("main").append( 
                    "<h1>" + item.title + "</h1>" + 
                    "<h2>" + item.month + "</h2>" +  
                     
                    "<h3>" +item.speaker + "</h3>" +  
                    "<p>" + item.text + "</p>" 
                ); 
            }); 
        });  
    }); 
});
}); 
