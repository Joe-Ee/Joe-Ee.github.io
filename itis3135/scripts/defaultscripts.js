//6 js scripts for the JS page -------------------------------------------------------
function nameMood(){
    //save name and mood in varluables
    let name = document.getElementById('name').value;
    let mood = document.getElementById('moodUser').value;
    //set the text in the h3 to the text given and the outer text too
    document.getElementById("userName").innerHTML = "The Jovial Ocelot Welcomes You " + name + "!";

    document.getElementById("myMood").innerHTML = "We're glad you are doing " + mood + "!";    
                    }
       //example from murach text
function salestax(){
        //get input

    let cost = document.getElementById('cost').value;
    let total = parseInt(cost) + .475 * parseInt(cost); //pareseint lets you go from string to integer for calcualtions
    //set the text in the h3 to the text given and the outer text too

    document.getElementById("totalTax").innerHTML = "The total after tax is $" + total;   
                    
                    }
                    //From Murach Text
function mpg(){
    //get input
    let miles = document.getElementById('miles').value;
    let gallons = document.getElementById('gallons').value;
    //set the text in the h3 to the text given and the outer text too
    document.getElementById("answerMiles").innerHTML = "The miles per gallon is " + parseInt(miles)/parseInt(gallons) + "!";
         
              }
//factorial a number
//is basically just a while loop that goes down until the number is 1 and multipllies it by itself
// ex 5 * 4 * 3 * 2 * 1
function factor(numbers){
        let ans = numbers;
        while (numbers > 1){
            numbers= numbers - 1;
            ans = ans * numbers;
                        }
        return ans;
                    }
//does 5 choose 2 by taking the numbers and putting it into the equation of n!/(s!(n-s)!)
function combinations(){
    //variables for numbers and their facotirals
    var total = 5;
    var sample = 2;
    var factorTotal = factor(5);
    var factorSample = factor(2);
    //total variale which is the facotiral equation with numbers
    var total = factorTotal/(factorSample*(factor(total - sample)));
    //output
    document.getElementById("chosen").innerHTML = "There are " + total +" combinations for 5 choose 2.";
                        }
//calculate area
function area(){
var length = 5;
var width = 8;
var total = length * width;
document.getElementById("area").innerHTML = "The area of the rectangle is " + total;
                    }
//calculates average score by diving the added up scores by the number of scores (4)
function averageScore(){
    var score1 = 90;
    var score2 = 95;
    var score3 = 83;
    var score4 = 99;
    var amount = 4;
    var total = score1 + score2 + score3 + score4;
    total = total/amount;
    document.getElementById("averageScores").innerHTML = "The average between " +score1 + ", " + score2  + ", " + score3 + ", " + score4 + " is " +total;

}
//----------------------------------------------------------------------------------------------------------------
    //make a new date object         
       
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString('en-US');
    //this line is getting the date name weekday name by going into teh array of weekdays and then looking for the corresponding date name
    document.getElementById("date").innerHTML = d.toLocaleDateString('en-US', { weekday: 'long'});
    document.getElementById("day").innerHTML = d.getDay();
    //get the long month from teh array
    document.getElementById("month").innerHTML = d.toLocaleDateString('default', {month: 'long'});
    document.getElementById("year").innerHTML = d.getFullYear();

//---------------------------------------------------------------------------------------------------------------------------------------------------------
function getShape(){
    //loop validator
    let good = 1;
    let sides = -1;
    let shapepicture = document.getElementById("shapeimage");
    //list of names of ogons so I can just reference this when picking the shpae
    const ogons = ["Nonagon", "Circle", "Digon", "Trigon", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octogon", "Enneagon", "Decagon"]
     

        //get shape that they typed in.
    sides = Math.abs(document.getElementById('sides').value);
    sides = Math.round(sides)
    //validate that they typed in a number bewteen 0 and 10 
    if (!validateEntry(sides)){
        good = 0;
        let prompt = document.getElementById("prompt").innerHTML = "Invalid amount of sides, try again.";
        return; 
    }

        
    alert(ogons[sides]);
    if(sides >0){
    shapepicture.src = "images/" + ogons[sides].toLowerCase() +".PNG"; 
                }
    else{
        shapepicture.src = "blank.png";
        }
                }

function validateEntry(sides){
        if(isNaN(sides) || sides <11){
            return true;
        }
        return false;
                            }   