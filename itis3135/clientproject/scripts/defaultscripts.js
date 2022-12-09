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

//this takes in user input and puts it on the screen by appending to dom
function writejs(){
   
    let user = document.getElementById("userInput").value;
    const main = document.getElementById("user");
    const fragment = document.createDocumentFragment();
    
    let p = document.createElement("p");
    p.textContent = user;
    fragment.append(p)
    
    main.append(p)
}


