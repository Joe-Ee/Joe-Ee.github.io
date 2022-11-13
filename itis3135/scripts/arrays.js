let person = ["Robert Iger", "Charles Hutchinson", "Brad Hayes", "Walter Teague", "Jeffery An", "Mary Powers", "Bobby Yeager", "Medina Gomez", "Joseph Onghena"];
let salaries = [154000, 153000, 156000, 156000, 154000, 130000, 130000, 137000, 1700000];
let newperson = [];
let newsalaries = [];



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
    newperson.push(name.value);
    newsalaries.push(salary)
    
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

    

     

     document.getElementById("resultText").innerHTML = "Salary Table"

    //let table = "<tr><th>Name</th><th>Salary</th></tr>";
    let table = document.querySelector('table')
    const guh = document.createDocumentFragment()
    let i = 0
    for(i; i < newperson.length; i++){
        //create the new element
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.append(newperson[i]);
        const td2 = document.createElement('td');
        td2.append(newsalaries[i]);
        tr.append(td1);
        tr.append(td2);
        //append the new elements
        guh.append(tr);
        
    }
    table.append(guh);

     
}
