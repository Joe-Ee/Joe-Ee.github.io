//set the first and seconds operands, the opperator, and the thing that shows up on the main screen;
let num1 = null;
let num2 = null;
let opperand = null;
let showing = null;

//used the tutorial for this block of code.
const keys = document.querySelector('.calculator__keys')
keys.addEventListener('click', e => {
   if (e.target.matches('button')) {
       const key = e.target
       const action = key.dataset.action
if (!action) {
   console.log('number key!')
   createNum(key.innerHTML)
            }
if (
   action === '*' ||
   action === '-' ||
   action === '+' ||
   action === '/'
 ) {
   console.log('operator key!')
   setOpp(key.innerHTML)
 }

 if (action === 'AC') {
   console.log('clear key!')
   clearr()
 }
 
 if (action === '=') {
   console.log('equal key!')
   calculate()
 }

 if((action === "inc") || (action === "dec")){
   console.log('inc or dec')
   incrementDecrement(action)
 }
}})
// user types in numbers and this deals with putting the number in the right variable and appending the number correctly
//issue with this involes if they have an answer, tghen want to type in a number immedietlyu.
function createNum(current){
   //if the first num is null and the operand is null then the nul will be set. 
 if((num1 == null) && (opperand == null) ){
    num1 = current;
    showing = null
    displayNum(num1);
    //if the first num is real then concat to ti
 }else if((opperand == null) && (showing == null)){
    num1 = num1.concat(current);
    console.log(num1); 
    displayNum(num1);
 }
 //if the operand has stuff in it and first num does but second num does not hten set it
 else if((num2 == null) && (opperand !=null ) ){
    num2 = current;
    displayNum(num2);
 }else{
   //add to second number. 
    num2 = num2.concat(current);
    console.log(num2);
    displayNum(num2);
 }

}
//when user types in an opperand then it sets the global opperand variable
function setOpp(opp){

    opperand = opp;
    console.log(opperand)
}

//calculate the answer. 
function calculate(){
   //case if the user just started typing again after the asnwer (means they want the answer in the next calculation)
   if((num1 == null) && (showing != null)){
      num1 = showing;
   }
   //make numbers into calulateable things
  num1 =  parseFloat(num1);
  num2 = parseFloat(num2);
if( opperand == "+"){
   showing =  num1 + num2;

   displayNum(showing);

}else if (opperand == "*"){
   showing = num1 * num2;
   displayNum(showing);

}else if (opperand == "/"){
   showing=  num1/num2;
   displayNum(showing);
}else{
   showing =  num1-num2;
   displayNum(showing);
}
num1 = null;
num2 = null;
opperand = null;
}

//clear the calcuator and display 0
function clearr(){
   //set the first and seconds operands, the opperator, and the thing that shows up on the main screen;
num1 = null;
num2 = null;
opperand = null;
showing = null;
displayNum(0);


}

//dispaly number in the little label on user end. 
function displayNum(num){

   document.getElementById("screen").innerHTML = num;

}

function incrementDecrement(upDown){
   if(num1 == null){
      num1 = showing
   }
if(upDown == "inc"){
   num1 = parseFloat(num1);
   num1 = num1+1;
   displayNum(num1)
}
if(upDown == "dec"){

   num1 = parseFloat(num1);
   num1 = num1-1;
   displayNum(num1)
}
}