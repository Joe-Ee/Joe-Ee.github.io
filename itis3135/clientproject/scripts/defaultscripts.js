function hide(arg){
    let ar = ["js", "html"];

    let page = document.getElementById(arg);
    
    console.log(ar.indexOf(arg)); //the user pressed this
    for(let i = 0; i < 2; i++){
        console.log('here')
        let  cur = document.getElementById(ar[i]);
        cur.style.display = 'none';
    }
    if(page.style.display == 'none'){

        page.style.display = 'block';

    }
}

function writejs(){
    console.log("hi")
    let user = document.getElementById("userInput").value;
    let main = document.querySelector("main");
    let p = document.createElement("p");
    p.textContent = "hi";
    console.log("HI")
    main.append(p)
}


