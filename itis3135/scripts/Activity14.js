$(document).ready(function() {
    
    $( "#chua" ).click(function() {
    $.getJSON("json_files/chua.json", function(data){ 
        //go through it
        $("#main").html("");
        $.each(data, function() { 
            //append informaiton to the div with the ID of  "#team"
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
$( "#toobin" ).click(function() {
    $("#main").html("");
    $.getJSON("json_files/toobin.json", function(data){ 
        //go through it
        
        $.each(data, function() { 
            //append informaiton to the div with the ID of  "#team"
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
    $("#main").html("");
    $.getJSON("json_files/sampson.json", function(data){ 
        //go through it
        
        $.each(data, function() { 
            //append informaiton to the div with the ID of  "#team"
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
    $("#main").html("");
    $.getJSON("json_files/sorkin.json", function(data){ 
        //go through it
        
        $.each(data, function() { 
            //append informaiton to the div with the ID of  "#team"
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
