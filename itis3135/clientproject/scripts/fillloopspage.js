$(document).ready(function(){
    setTimeout(10000)
    let i = 0;
    $.getJSON("json/loops.json", function(data){ 
        // 
        
        $.each(data, function() { 
            
            $.each(this, function(key, item) { 
                $("#load").append(
                    "<section >"
                )
                if( i %2 == 0){
                    $("#load").append(
                    "<div style='float:left; width: 35%'>"+
                    "<h4>" + item.name + "</h4>" + 

                    "<p>" + item.description + "</p>" +
                    "</div>"+
                    "<div style='float: right; width: 65%'>"+
                        "<figure>" + 
                        '<img src =' + item.image +">"+
                        "<figcaption>" + item.caption + "</figcaption>" +
                        "</figure>" +
                        "</div>"
                    )

                }else{
                    $("#load").append( 
                        
                        "<div style='float: left; width: 65%'>"+
                        "<figure>" + 
                        '<img src =' + item.image +">"+
                        "<figcaption>" + item.caption + "</figcaption>" +
                        "</figure>" +
                        "</div>"+
                        "<div style='float:right; width: 35%'>"+
                    "<h4>" + item.name + "</h4>" + 

                    "<p>" + item.description + "</p>" +
                    "</div>"
                        
                    ); 
                }
                $("#load").append(
                    "  </section >"
                    + '<div style="clear:both"></div>'
                )
                i++;
                console.log(i)
            }); 
        });  
    }); 

});


    







