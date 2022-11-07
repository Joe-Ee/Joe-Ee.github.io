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


