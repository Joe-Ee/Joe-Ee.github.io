const slide = document.querySelector('.slide');
//all of the images
const images = document.querySelectorAll('.slide img');

const prev = document.querySelector('#previousbutton');
const next = document.querySelector('#nextbutton');

let counter = 1;
//get button width
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + ( -size * counter )+'px)';


//when next button is clicked
next.addEventListener('click', function newClick(){
    if(counter == 15){
        counter = 1
    }
    slide.style.transition = "transform 0.5s ease-out"
    counter = counter + 1;
    console.log(counter)
    slide.style.transform = 'translateX(' + ( -size * counter )+'px)';
});

//when prvious button is clicked then run the newPrev function
prev.addEventListener('click', function newPrev(){
    counter = counter - 1;

    slide.style.transition = "transform 0.6s ease-out"
    console.log(counter)
    slide.style.transform = 'translateX(' + ( -size * counter )+'px)';

});

slide.addEventListener('transitionend', function transitionEnd(){
    if(images[counter].id === 'last'){
        slide.style.transition = "none"
        //second to last
        counter = images.length -2;
        slide.style.transform = 'translateX(' + ( -size * counter )+'px)';
    }
    if(images[counter].id === 'first'){
        slide.style.transition = "none"
        //second to last
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + ( -size * counter )+'px)';
    }
})

function hide(arg){
    let ar = ["home", "who", "why", "seasons", "where", "how"];
    let home = ar[0];
    let who = ar[1];
    let why = ar[2];
    let season = ar[3];
    let where = ar[4];
    let how = ar[5]
    let page = document.getElementById(arg);
    
    console.log(ar.indexOf(arg)); //the user pressed this
    for(let i = 0; i < 6; i++){
        let  cur = document.getElementById(ar[i]);
        cur.style.display = 'none';
    }
    if(page.style.display == 'none'){

        page.style.display = 'block';

    }
}