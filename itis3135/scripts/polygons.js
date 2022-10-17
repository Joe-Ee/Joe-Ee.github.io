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