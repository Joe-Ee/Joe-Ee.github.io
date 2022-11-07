//sources:
//https://api.jquery.com/addclass/
//https://api.jquery.com/addclass/
//https://api.jquery.com/get/
//https://www.youtube.com/watch?v=KcdBOoK3Pfw
//https://api.jquery.com/position/
//https://www.w3schools.com/howto/howto_js_slideshow.asp

//this works by changing which picture has the active class by etiehr moving it to the element before or after when teh button is pressed, 
$(document).ready(function(){
    //if they click the next buton
    $('.next').on('click', function(){
        let cur = $('.active');
        //grab next elemtn
        let next = cur.next();
        //if next exists remove the class from teh current image and push it down and add the class to the next one and push it up
        if(next.length){
            cur.removeClass('active').css('z-index', -1);
            next.addClass('active').css('z-index', 1);
        }
        //added funct8inoality to circle back to the beginning
        else{
            cur.removeClass('active').css('z-index', -1);
            let previous = cur.prev();
            for(let i = 0; i < 4; i++){
                previous = previous.prev();
            }

            previous.addClass('active').css('z-index', 1);
        }

        
    });
    //if they click the previous button do this function
    $('.prev').on('click', function(){
        let cur = $('.active');
        //grab next elemtn
        let previous = cur.prev();
        //if next exists remove the class from teh current image and push it down and add the class to the next one and push it up
        if(previous.length){
            cur.removeClass('active').css('z-index', -1);
            previous.addClass('active').css('z-index', 1);
        }
                //added funct8inoality to circle back to end
        else{
            cur.removeClass('active').css('z-index', -1);
            let next = cur.next();
            for(let i = 0; i < 4; i++){
                next = next.next();
            }
            next.addClass('active').css('z-index', 1);
        }
        
    });
});