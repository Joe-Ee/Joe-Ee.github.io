let person = ["Robert Iger", "Charles Hutchinson", "Brad Hayes", "Walter Teague", "Jeffery An", "Mary Powers", "Bobby Yeager", "Medina Gomez", "Joseph Onghena"];
let salaries = [154000, 153000, 156000, 156000, 154000, 130000, 130000, 137000, 1700000];


function addSalary(){
    document.getElementById("resultText").innerHTML = "salary added"
    let name = document.getElementById("name");
    let salary = document.getElementById("salary").value;
    //input validation
    if((name == "") || (salary == "")){
        alert("please type in the missing feild(s)")
    } else if(isNaN(salary)){
        // tell the user they messed up
        alert("Type in salary as a number")
        let page = document.getElementById("results");
        
    }else{
    person.push(name.value);
    salaries.push(salary)
    
    }
    name.focus()

}

function displayResults(){
    //set base variables 
    document.getElementById("resultText").innerHTML = "Results for average and highest salary"

    let sum = 0;
    let i = 0;
    let highest = 0;
    //loop through salaries abnd look for hieghts and add them
    for(i =0; i < salaries.length; i++){
        if(salaries[i] > highest){
            highest = salaries[i];
        }
        sum = sum + salaries[i];
    }
    //get avearge
    let average = sum/i;
    average = average.toFixed(2);
    //do work of adding the element ont he page. 
    let elem = document.createElement("p");
    let words = document.createTextNode("The average salary is " + average + " The highest salary is " + highest);
    elem.appendChild(words);
    let page = document.getElementById("results");
    page.appendChild(elem);
}
function displaySalary(){
    
    document.getElementById("resultText").innerHTML = "Salary Table"

    //let table = "<tr><th>Name</th><th>Salary</th></tr>";
    let newTr = document.createElement("tr")
    let th = document.createElement("th")
    let th2 = document.createElement("th")
    let name = document.createTextNode("Name")
    let sal = document.createTextNode("Salary")
    th.appendChild(name);
    th2.appendChild(sal);
    newTr.appendChild(th);
    newTr.appendChild(th2);

    //results div
    let page = document.getElementById("results");
    //real table
    let bruh = document.createElement("table");
    bruh.appendChild(newTr)
    for (let i = 0; i < salaries.length; i++) 
    {  
        //set rows and columns
        let tr  = document.createElement("tr")
        let first = document.createElement("td")
        let second = document.createElement("td")
        
        let append1 =  document.createTextNode(person[i])
        let append2 = document.createTextNode(salaries[i])
        //apend the children
        first.appendChild(append1)
        second.appendChild(append2)
        tr.appendChild(first)
        tr.appendChild(second)
        bruh.appendChild(tr)

    }
    let elem = document.createElement("table")
    
    page.appendChild(bruh)

     let table = document.createTextNode("table")
}
